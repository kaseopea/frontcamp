import _ from 'lodash';
import TODO_MOCK_DATA from '../../mockData/todosMock';
import TODO from '../../const/todoConst';

export default class TodoStore {
    constructor() {
        this.todos = TODO_MOCK_DATA || [];
    }

    getTodos(type) {
        switch (type) {
            case TODO.types.active:
                return _.filter(this.todos, todo => !todo.completed);
            case TODO.types.completed:
                return _.filter(this.todos, todo => todo.completed);
            default:
                return this.todos;
        }
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    updateTodo(todo) {
        const todoIndex = _.findIndex(this.todos, {id: todo.id});
        this.todos[todoIndex].text = todo.text;
        this.todos[todoIndex].date = new Date(Date.now());
    }

    completeTodo(todoId) {
        const todoIndex = _.findIndex(this.todos, {id: todoId});
        this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
    }

}
