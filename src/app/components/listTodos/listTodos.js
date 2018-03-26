import template from './listTodos.html';

class Controller {
    /** @ngInject */
    constructor() {

    }

}

export default {
    template,
    bindings: {
        todos: '<'
    },
    controller: Controller
};
