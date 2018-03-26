import angular from 'angular';
import CONFIG from '../app.config';

import appComponent from './app/app';
import todoComponent from './todo/todo';
import todoItemComponent from './todoItem/todoItem';
import addTodoComponent from './addTodo/addTodo';
import manageTodoComponent from './manageTodo/manageTodo';
import listTodosComponent from './listTodos/listTodos';
import filterTodoComponent from './filterTodo/filterTodo';

export const componentsModule = CONFIG.appName.concat('.components');

angular
  .module(componentsModule, [])
    .component('app', appComponent)
    .component('todo', todoComponent)
    .component('manageTodo', manageTodoComponent)
    .component('addTodo', addTodoComponent)
    .component('todoItem', todoItemComponent)
    .component('listTodos', listTodosComponent)
    .component('filterTodo', filterTodoComponent);
