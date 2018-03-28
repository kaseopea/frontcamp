import angular from 'angular';
import CONFIG from '../app.config';

import rangeFilterFn from './range/range';

export const filtersModule = CONFIG.appName.concat('.filters');

angular.module(filtersModule, [])
    .filter('range', rangeFilterFn);
