import TodoApp from '../app.module';
import TODO_MOCK_DATA from '../mockData/todosMock';
import _ from 'lodash';

class TodosStore {
    constructor() {
        this.todos = TODO_MOCK_DATA || [];
    }

    getTodos() {
        return this.todos;
    }

    getCompletedTodos() {
        return _.filter(this.todos, todo => todo.completed);
    }

    getIncompletedTodos() {
        return _.filter(this.todos, todo => !todo.completed);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

export default angular.module(TodoApp).service('TodoStore', TodosStore);
