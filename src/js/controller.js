import {APP_CONFIG} from './const/appConfig';
import {ELEMENTS} from './const/elements';
import {TEXT} from './const/messages';
import {SourcesActions} from './flux/sourcesActions';
import {SourcesStore} from './flux/sourcesStore';

// templates
const templateError = require('./views/errorMessage.ejs');
const templateNews = require('./views/newsMarkup.ejs');
const templateSources = require('./views/sourcesMarkup.ejs');

export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.activeNews = null;
        this.sourcesActions = new SourcesActions();
        this.sourcesStore = new SourcesStore();
        this.init();
        this.initEvents();
    }
    init() {
        this.initNewsSources();
        this.loadDefaultNews();
    }
    initEvents() {
        this.initMainMenu();
        this.initResizeEventListener();

        ELEMENTS.logo.addEventListener('click', this.loadDefaultNews.bind(this));
        ELEMENTS.mainContent.addEventListener('click', this.articleClickHandler.bind(this));
        ELEMENTS.menuButton.addEventListener('click', this.toggleMenu.bind(this));
    }

    /* SOURCES (FLUX POWERED) */
    initNewsSources() {
        // load sources with flux model
        this.sourcesActions.loadNewsSources();

        // render content when store state changed
        this.sourcesStore.addListener((payload) => {
            this.view.renderSourcesContent(templateSources({
                data: payload.sources
            }));
            // add event listener for sources click event
            ELEMENTS.sourcesList[0].addEventListener('click', this.sourceListClickHandler.bind(this));
        });
    }

    sourceListClickHandler(event) {
        this.openSource(event.target.getAttribute('data-source-id'));
        event.stopPropagation();
    }

    /* NEWS */
    loadDefaultNews() {
        const that = this;
        // prepare content view to load data
        this.view.prepareContentForLoading();

        // ask model to load default set of news
        this.model.loadDefaultNews()
            .then((data) => {
                // save data as active news
                that.activeNews = data;

                // save source title
                const {source: {name: sourceTitle = ''}} = data[0];

                // render content
                this.view.renderContent(templateNews({
                    data,
                    sourceTitle,
                    newsDescriptionLimit: APP_CONFIG.newsDescriptionLimit,
                    newsAuthorLimit: APP_CONFIG.newsAuthorLimit,
                    newsShowDateLabel: APP_CONFIG.newsShowDateLabel
                }));
            })
            .catch(() => {
                // show error message no items found
                this.view.renderContent(templateError({
                    message: TEXT.error.noNewsLoaded
                }));
            });
    }

    loadNewsBySourceId(sourceId) {
        const that = this;
        this.view.removeClass(document.body, ELEMENTS.menuExpandedClass);
        this.model
            .getNewsByParam('sources', sourceId)
            .then((data) => {
                // save data as active news
                that.activeNews = data;

                // save source title
                const {source: {name: sourceTitle = ''}} = data[0];

                // render data
                this.view.renderContent(templateNews({
                    data,
                    sourceTitle,
                    newsDescriptionLimit: APP_CONFIG.newsDescriptionLimit,
                    newsAuthorLimit: APP_CONFIG.newsAuthorLimit,
                    newsShowDateLabel: APP_CONFIG.newsShowDateLabel
                }));
            })
            .catch(() => {
                // show error message no items found
                this.view.renderContent(templateError({
                    message: TEXT.error.noNewsLoaded
                }));
            });
    }


    /* General */
    articleClickHandler(event) {
        event.preventDefault();
        const contentViewerConfig = this.getArticleData(event.target);

        if (contentViewerConfig) {
            Controller.initContentViewer(contentViewerConfig);
        }
    }

    initMainMenu() {
        if (this.view.isMobileView() && !this.view.isHidden(ELEMENTS.sourcesContent)) {
            this.view.addClass(document.body, ELEMENTS.menuExpandedClass);
        }
    }

    initResizeEventListener() {
        window.addEventListener('resize', () => {
            if (this.view.isMobileView()) {
                this.view.hideElement(ELEMENTS.sourcesContent);
                this.view.removeClass(document.body, ELEMENTS.menuExpandedClass);
            } else {
                this.view.showElement(ELEMENTS.sourcesContent);
            }
        });
    }

    // Mobile Menu Button
    toggleMenu() {
        this.view.toggleElementWithClassnameToBody(ELEMENTS.sourcesContent, ELEMENTS.menuExpandedClass);
    }

    /* UTILS */
    openSource(sourceId) {
        this.view.hideForMobileView(ELEMENTS.sourcesContent);

        if (sourceId) {
            // prepare content view to load data
            this.view.prepareContentForLoading();

            // load source by id
            this.loadNewsBySourceId(sourceId);
        }
    }

    getArticleData(element) {
        let output = null;
        if (element && element.dataset && element.dataset.articleId) {
            const newsId = parseInt(element.dataset.articleId, 10);
            if (this.activeNews) {
                const activeArticle = this.activeNews.filter(news => news.id === newsId);
                output = {
                    title: activeArticle[0].title,
                    url: activeArticle[0].url
                }
            }
        } else {
            output = (element.parentNode) ? this.getArticleData(element.parentNode) : null;
        }

        return output;
    }

    static initContentViewer(config) {
        require.ensure(['./contentViewer'], (require) => {
            const cv = require('./contentViewer');
            const cViewer = new cv.ContentViewer(config);
            return cViewer;
        });
    }

}
