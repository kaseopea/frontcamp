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
import {NewsStore} from './flux/newsStore'
import {Dispatcher} from './flux/dispatcher';

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

        const newsStore = new NewsStore();
        console.log(newsStore.getArticles());

        newsStore.addListener(() => {
            console.log("TODOS UPDATED");
        });

        newsStore.emitter.dispatch({
            type: 'CREATE_TODO',
            article: {id: 1, title: "Write 'Flux from Scratch'"}
        });

        console.log(newsStore.getArticles());
    }
}