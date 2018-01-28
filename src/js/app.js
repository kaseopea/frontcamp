/* Import resources */
import '../assets/apple-touch-icon.png';
import '../assets/favicon.ico';
import '../assets/favicon-16x16.png';
import '../assets/favicon-32x32.png';

/* Main Imports resources */
import {APP_CONFIG} from './const/appConfig';
import {ViewFacade} from './viewFacade';
import {Controller} from './controller';
import {NewsModelFactory} from './model';

import {ELEMENTS} from './const/elements';

export class App {
    constructor() {
        if (typeof App.instance === 'object') {
            return App.instance;
        }
        this.modelProvider = new NewsModelFactory();
        App.instance = this;
        return this;
    }

    init() {
        this.model = this.modelProvider.create(APP_CONFIG.defaultModel.provider);
        this.view = new ViewFacade();
        this.controller = new Controller(this.model, this.view);

        // this.activeNews = null;

        this.main();
        this.registerEvents();
    }

    main() {
        this.controller.initNewsSources();
        this.controller.loadDefaultNews();
        // App.initResizeEventListener();
        // App.initMainMenu();
    }

    registerEvents() {
        ELEMENTS.logo.addEventListener('click', this.controller.loadDefaultNews.bind(this));
        // ELEMENTS.mainContent.addEventListener('click', this.articleClickHandler.bind(this));
        // ELEMENTS.menuButton.addEventListener('click', this.toggleMenu.bind(this));
    }

/*

articleClickHandler(event) {
    event.preventDefault();
    const contentViewerConfig = this.getArticleData(event.target);

    if (contentViewerConfig) {
        App.initContentViewer(contentViewerConfig);
    }
}

// Mobile Menu Button
toggleMenu() {
    if (this.viewRenderer.isHidden(ELEMENTS.sourcesContent)) {
        this.viewRenderer.showElement(ELEMENTS.sourcesContent);
        this.viewRenderer.addClass(document.body, ELEMENTS.menuExpandedClass);
    } else {
        this.viewRenderer.hideElement(ELEMENTS.sourcesContent);
        this.viewRenderer.removeClass(document.body, ELEMENTS.menuExpandedClass);
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

static initMainMenu() {
    if (ViewRenderer.isMobileView() && !ViewRenderer.isHidden(ELEMENTS.sourcesContent)) {
        ViewRenderer.addClass(document.body, ELEMENTS.menuExpandedClass);
    }
}

static initResizeEventListener() {
    window.addEventListener('resize', () => {
        if (ViewRenderer.isMobileView()) {
            ViewRenderer.hideElement(ELEMENTS.sourcesContent);
            ViewRenderer.removeClass(document.body, ELEMENTS.menuExpandedClass);
        } else {
            ViewRenderer.showElement(ELEMENTS.sourcesContent);
        }
    });
}
*/
}