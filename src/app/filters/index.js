import angular from 'angular';
import CONFIG from '../app.config';

import todoDateFilterFn from './todoDate';

export const filtersModule = CONFIG.appName.concat('.filters');

angular
    .module(filtersModule, [])
    .filter('todoDate', todoDateFilterFn);
