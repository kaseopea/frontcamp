import template from './app.html';

class Controller {
  /** @ngInject */
  constructor() {
    console.warn('appController', this);
      this.test = 'simple test';
  }
}

export default {
  template,
  controller: Controller,
  controllerAs: 'vm'
};