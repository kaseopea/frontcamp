import moment from 'moment';
import template from './todo.html';
import TODO from '../../const/todoConst';

class Controller {
    /** @ngInject */
    constructor(TodoStore, $state) {
        this.store = TodoStore;
        this.$state = $state;
        this.activeTodo = null;

        /* Filters */
        this.textFilter = '';
        this.dateFilter = {
            from: moment().subtract(.5, 'years'),
            to: moment()
        };
    }

    $onInit() {
        this.todosActive = Controller.getListBasedOnFilter(this.todos, TODO.types.active);
        this.todosCompleted = Controller.getListBasedOnFilter(this.todos, TODO.types.completed);
        this.todosResource = this.todosResource.todos;
    }

    completeTodo(todoId) {
        this.store.completeTodo(todoId);
        this.$state.go('todo.list', {}, {reload: true});
    }

    editTodo(todo) {
        this.$state.go('todo.updateTodo', {todo});
    }

    /* Utils */
    static getListBasedOnFilter(list, filter) {
        if (!filter) return list;

        const filterMap = {
            all: () => true,
            active: (item) => !item.completed,
            completed: (item) => item.completed
        };

        return list.filter(filterMap[filter]);
    }
}

export default {
    template,
    bindings: {
        todos: '<',
        todosResource: '<'
    },
    controller: Controller
};
