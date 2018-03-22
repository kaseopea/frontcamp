import moment from 'moment';
import template from './todo.html';
import TODO from '../../const/todoConst';

class Controller {
    /** @ngInject */
    constructor(TodoStore, TodoResource) {
        this.store = TodoStore;
        this.activeTodo = null;
        this.getTodos();

        this.textFilter = '';
        this.dateFilter = {
            from: moment().subtract(.5, 'years'),
            to: moment()
        };

        this.addTodoHandler = this.addTodo.bind(this);
        this.updateTodoHandler = this.updateTodo.bind(this);

        // get todos from $resource
        TodoResource.get({}, (todos) => console.warn(todos));
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
