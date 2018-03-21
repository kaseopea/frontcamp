import template from './todo.html';
import TODO from '../../const/todoConst';

class Controller {
    /** @ngInject */
    constructor(todoStore) {
        this.store = todoStore;
        this.activeTodo = null;
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
        this.todosIncompleted = this.store.getTodos(TODO.types.active);
        this.todosCompleted = this.store.getTodos(TODO.types.completed);
    }

    addTodo(todo) {
        this.store.addTodo(todo);
        this.getTodos();
    }

    updateTodo(todo) {
        this.store.updateTodo(todo);
        this.getTodos();
        this.activeTodo = null;
    }

    completeTodo(todoId) {
        this.store.completeTodo(todoId);
        this.getTodos();
    }

    editTodo(todo) {
        this.activeTodo = todo;
        this.getTodos();
    }
}

export default {
    template,
    controller: Controller
};
