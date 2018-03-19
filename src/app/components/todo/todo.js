import template from './todo.html';

class Controller {
    /** @ngInject */
    constructor(todoStore) {
        this.store = todoStore;
        this.activeTodo = null;
        this.todosIncompleted = null;
        this.todosCompleted = null;
        this.getTodos();

        // this.addTodoHandler = this.addTodo.bind(this);
        this.updateTodoHandler = this.updateTodo.bind(this);
    }

    $onChanges(changes) {
        console.info(changes);
    }
    getTodos() {
        this.todosIncompleted = this.store.getIncompletedTodos();
        this.todosCompleted = this.store.getCompletedTodos();
    }

    addTodo($event) {
        console.warn($event);
        // this.store.addTodo(todo);
        // this.getTodos();
    }

    updateTodo(data) {
        console.warn('updateTodo', data);
    }

    completeTodo() {
        console.warn('completeTodo');
    }
}

export default {
    template,
    controller: Controller
};
