import angular from 'angular';
// import uiRouter from '@uirouter/angularjs';
import CONFIG from '../app.config';

import appComponent from './app/app';
import articlesComponent from './articles/articles';
import articleItemComponent from './articleItem/articleItem';
import manageArticleComponent from './manageArticle/manageArticle';
import listArticlesComponent from './listArticles/listArticles';

export const componentsModule = CONFIG.appName.concat('.components');

export const ArticlesComponents = angular
  .module(componentsModule, [])
    .component('app', appComponent)
    .component('articles', articlesComponent)
    .component('manageArticle', manageArticleComponent)
    .component('articleItem', articleItemComponent)
    .component('listArticles', listArticlesComponent)
  .name;
