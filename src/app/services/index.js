import angular from 'angular';
import CONFIG from '../app.config';

import ArticleStore from './articleStore/articleStore';
import ArticlesResource from './articleResource/articlesResource';
import PaginationService from './paginationService/paginationService';
import uiRouterDebug from './uiRouterDebug/uiRouterDebug';

export const servicesModule = CONFIG.appName.concat('.services');

angular.module(servicesModule, [])
    .service('ArticleStore', ArticleStore)
    .service('PaginationService', PaginationService)
    .service('UiRouterDebug', uiRouterDebug)
    .factory('ArticlesResource', ArticlesResource);
