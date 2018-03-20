import template from './todoItem.html';

class Controller {
    /** @ngInject */
    constructor() {
    }
}

export default {
    template,
    bindings: {
        todo: '<',
        completeHandler: '&',
        editHandler: '&'
    },
    controller: Controller
};
