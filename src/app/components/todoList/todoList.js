import template from './todoList.html';

class TodoListController {
  /** @ngInject */
  constructor($http) {

    this.styles = styles;
  }
}

export const todoList = {
  template,
  controller: TodoListController
};