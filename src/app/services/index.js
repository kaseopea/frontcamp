import angular from 'angular';
import CONFIG from '../app.config';

import TodoStore from './todoStore/todoStore';
import TodoResource from './todoResource/todoResource';

export const servicesModule = CONFIG.appName.concat('.services');

angular.module(servicesModule, [])
    .service('TodoStore', TodoStore)
    .factory('TodoResource', TodoResource);
