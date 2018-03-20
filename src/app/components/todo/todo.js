import template from './todo.html';

class Controller {
    /** @ngInject */
    constructor(todoStore) {
        this.store = todoStore;
        this.activeTodo = null;
        this.todosIncompleted = null;
        this.todosCompleted = null;
        this.getTodos();

        this.textFilter = '';
        this.dateFilter = {
            from: new Date(Date.now()),
            to: new Date(Date.now())
        };

        this.addTodoHandler = this.addTodo.bind(this);
        this.updateTodoHandler = this.updateTodo.bind(this);
    }

    getTodos() {
        this.todosIncompleted = this.store.getIncompletedTodos();
        this.todosCompleted = this.store.getCompletedTodos();
    }

    addTodo(todo) {
        console.warn('addTodo', todo);
        // this.store.addTodo(todo);
        // this.getTodos();
    }

    updateTodo(todo) {
        console.warn('updateTodo', todo);
    }

    /* WORKING */
    completeTodo(todoId) {
        console.warn(`Completing Todo with ID: #${todoId}`);
    }

    editTodo(todo) {
        this.activeTodo = todo;
        console.warn(`Editing Todo with ID: #${todo.id}`);
    }
}

export default {
    template,
    controller: Controller
};
