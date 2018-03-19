import template from './todosList.html';

class Controller {
    /** @ngInject */
    constructor() {
    }
}

export default {
    template,
    bindings: {
        todos: '=',
        filter: '<'
    },
    controller: Controller,
    controllerAs: 'vm'
};
