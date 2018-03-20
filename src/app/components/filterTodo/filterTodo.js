import template from './filterTodo.html';

class Controller {
    /** @ngInject */
    constructor() {

    }

}

export default {
    template,
    bindings: {
        filterByText: '=',
        filterByDate: '=',
    },
    controller: Controller
};
