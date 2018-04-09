import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// import { AppMain } from '../../index';
import { ArticlesComponents } from '../index';
import { mockArticles } from '../../mockData/articlesMock';
import { ArticleStore } from '../../services/articleStore/articleStore';

describe('Component: Articles', () => {
  beforeEach(angular.mock.module(ArticlesComponents, uiRouter));
  let controller;

  beforeEach(inject(($componentController, $state) => {
    controller = $componentController('articles',
      {
        ArticleStore,
        $state
      },
      {
        articles: mockArticles
      }
    );

    console.log(controller);
  }));

  it('Controller', () => {
    // controller.updateArticleHandler();
    // expect($state.go).toHaveBeenCalledWith("articles.update", { article: mockArticle });
  });


});