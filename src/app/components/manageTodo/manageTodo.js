import template from './manageTodo.html';


class Controller {
    /** @ngInject */
    constructor($state, TodoStore) {
        this.store = TodoStore;
        this.$state = $state;
        this.activeTodo = $state.params.todo || {
            text: '',
            completed: false
        };
        this.isUpdate = !!$state.params.todo;
    }

    submitHandler() {
        this.activeTodo.date = new Date(Date.now());
        if (this.isUpdate) {
            this.store.updateTodo(this.activeTodo);
        } else {
            this.store.addTodo(this.activeTodo)
        }
        this.$state.go('todo.list');
    }
}

export default {
    template,
    controller: Controller
};
