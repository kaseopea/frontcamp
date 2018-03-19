import angular from 'angular';
import CONFIG from '../app.config';

import todoStore from './todoStore/todoStore';

export const servicesModule = CONFIG.appName.concat('.services');

angular.module(servicesModule, [])
    .service('todoStore', todoStore);
