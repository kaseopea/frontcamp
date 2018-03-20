import angular from 'angular';
import CONFIG from '../app.config';

import todoDateFilterFn from './todoDate';
import startsWithFilterFn from './startsWith';

export const filtersModule = CONFIG.appName.concat('.filters');

angular
    .module(filtersModule, [])
    .filter('todoDate', todoDateFilterFn)
    .filter('startsWith', startsWithFilterFn);
