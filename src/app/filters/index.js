import angular from 'angular';
import CONFIG from '../app.config';

import todoDateFilterFn from './todoDate';
import startsWithFilterFn from './startsWith';
import dateRangeFilterFn from './dateRangeFilter';

export const filtersModule = CONFIG.appName.concat('.filters');

angular
    .module(filtersModule, [])
    .filter('todoDate', todoDateFilterFn)
    .filter('startsWith', startsWithFilterFn)
    .filter('dateRange', dateRangeFilterFn);
