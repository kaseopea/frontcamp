import angular from 'angular';
import CONFIG from '../app.config';

import ArticleStore from './articleStore/articleStore';
import ArticlesResource from './articleResource/articlesResource';
import PaginationService from './paginationService/paginationService';

export const servicesModule = CONFIG.appName.concat('.services');

angular.module(servicesModule, [])
    .service('ArticleStore', ArticleStore)
    .service('PaginationService', PaginationService)
    .factory('ArticlesResource', ArticlesResource);
