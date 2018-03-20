import angular from 'angular';
import CONFIG from '../app.config';

import appComponent from './app/app';
import todoComponent from './todo/todo';
import todoItemComponent from './todoItem/todoItem';
import manageTodoComponent from './manageTodo/manageTodo';

export const componentsModule = CONFIG.appName.concat('.components');

angular
  .module(componentsModule, [])
    .component('app', appComponent)
    .component('todo', todoComponent)
    .component('manageTodo', manageTodoComponent)
    .component('todoItem', todoItemComponent);
