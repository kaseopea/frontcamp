import {AppDispatcher} from './dispatcher';
import {ACTIONS} from './actionsConst';

export class SourcesStore {
    constructor() {
        this.dispatcher = new AppDispatcher(); // Global AppDispatcher Singleton
        this.sources = [];
        this.init();
    }

    init() {
        // register callback to Dispatcher
        this.dispatcher.register((payload = {}) => {

            switch (payload.type) {
                /* Load sources in SourcesStore */
                case ACTIONS.LOAD_SOURCES:
                    payload.sources.map((source) => this.sources.push(source));
                    break;
                /* Reset SourcesStore contents */
                case ACTIONS.RESET_SOURCES:
                    this.sources = [];
                    break;
                default:
                    return null;
            }

        });
        this.dispatcher.dispatch(); // Emit Change
    }

    /* Get Store State */
    getSources() {
        return this.sources;
    }

    /* Register Listener */
    addListener(callback) {
        return this.dispatcher.register(callback);
    }

    /* Remove Listener */
    removeListener(id) {
        return this.dispatcher.unregister(id);
    }
}

