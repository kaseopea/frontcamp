import {ViewRenderer} from './view';
import {ELEMENTS} from './const/elements';

export class ViewFacade {
    constructor() {
        this.viewRenderer = ViewRenderer;
    }

    prepareContentForLoading() {
        this.viewRenderer.resetView(ELEMENTS.mainContent);
        this.viewRenderer.showElement(ELEMENTS.loader);
    }

    renderContent(html) {
        // if loader is visible - hide it
        if (!this.viewRenderer.isHidden(ELEMENTS.loader)) {
            this.viewRenderer.hideElement(ELEMENTS.loader)
        }
        // setting content
        this.viewRenderer.setView(ELEMENTS.mainContent, html);
    }

    renderSourcesContent(html) {
        // if loader is visible - hide it
        if (!this.viewRenderer.isHidden(ELEMENTS.loader)) {
            this.viewRenderer.hideElement(ELEMENTS.loader)
        }

        // setting sources content
        this.viewRenderer.setView(ELEMENTS.sourcesContent, html);
    }

    hideForMobileView(element) {
        if (this.viewRenderer.isMobileView()) {
            this.viewRenderer.hideElement(element);
        }
    }

}