import angular from 'angular';
import CONFIG from '../app.config';

import ArticleStore from './articleStore/articleStore';
import ArticlesResource from './articleResource/articlesResource';

export const servicesModule = CONFIG.appName.concat('.services');

export const Services = angular.module(servicesModule, [])
    .service('ArticleStore', ArticleStore)
    .factory('ArticlesResource', ArticlesResource)
  .name;
