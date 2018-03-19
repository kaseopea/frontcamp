import _ from 'lodash';

import TODO_MOCK_DATA from '../../mockData/todosMock';

export default class TodoStore {
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
