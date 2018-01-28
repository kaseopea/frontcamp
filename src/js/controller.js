import {APP_CONFIG} from './const/appConfig';
import {ELEMENTS} from './const/elements';
import {TEXT} from './const/messages';

// templates
const templateError = require('./views/errorMessage.ejs');
const templateNews = require('./views/newsMarkup.ejs');
const templateSources = require('./views/sourcesMarkup.ejs');

export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    /* SOURCES */
    initNewsSources() {
        this.model
            .getNewsSources()
            .then((data) => {
                // render content
                this.view.renderSourcesContent(templateSources({data}));

                // add event listener
                ELEMENTS.sourcesList[0].addEventListener('click', this.sourceListClickHandler.bind(this));
            })
            .catch(() => {
                this.view.renderContent(templateError({
                    message: TEXT.error.noSourcesLoaded
                }));
            });
    }

    sourceListClickHandler(event) {
        this.openSource(event.target.getAttribute('data-source-id'));
        event.stopPropagation();
    }

    /* NEWS */
    loadDefaultNews() {
        // prepare content view to load data
        this.view.prepareContentForLoading();

        // ask model to load default set of news
        this.model.loadDefaultNews()
            .then((data) => {
                // decide what to do with activeNews variable
                // that.activeNews = data;

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
        this.view.viewRenderer.removeClass(document.body, ELEMENTS.menuExpandedClass);
        this.model
            .getNewsByParam('sources', sourceId)
            .then((data) => {
                //???
                that.activeNews = data;

                // save source title
                const {source: {name: sourceTitle = ''}} = data[0];

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


    /* UTILS */
    openSource(sourceId) {
        this.view.hideForMobileView(ELEMENTS.sourcesContent);

        if (sourceId) {
            // prepare content view to load data
            this.view.prepareContentForLoading();

            this.loadNewsBySourceId(sourceId);
        }
    }

}
