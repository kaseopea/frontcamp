// import { NOTIFICATOR_CONFIG } from './config';

/*
* Notificator is an implementation on Singleton Design Pattern
* log message (blank white)
* info message (blue)
* error message (red)
* warn message (orange)
*
* */

class Notificator {
    constructor() {
        this._type = 'Notificator';
    }

    init(element) {
        this._element = element
    }

    showMessage(config) {

    }
}


export default new Notificator();