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
    }
}