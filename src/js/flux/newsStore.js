import {Dispatcher} from './dispatcher';

export class NewsStore {
    constructor() {
        this.emitter = new Dispatcher();
        this.articles = {};
        this.init();
    }

    init() {
        // register callback to Dispatcher
        this.emitter.register((payload = {}) => {
            switch (payload.type) {
                case 'CREATE_TODO':
                    this.articles[payload.article.id] = payload.article;
                    break;
                case 'UPDATE_TODO':
                    Object.assign(this.articles[payload.article.id], payload.article);
                    break;
                case 'REMOVE_TODO':
                    delete this.articles[payload.article.id];
                    break;
                default:
                    return null; // irrelevant payload
            }
        });
        this.emitter.dispatch();
    }

    getArticles() {
        return this.articles;
    }

    addListener(callback) {
        return this.emitter.register(callback);
    }

    removeListener(id) {
        return this.emitter.unregister(id);
    }
}

