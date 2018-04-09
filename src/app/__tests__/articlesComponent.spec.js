import uiRouter from '@uirouter/angularjs';
import { Components } from '../components/index';
import { Services } from '../services/index';
import { mockArticles } from '../mockData/articlesMock';

describe('Component: Articles', () => {
  beforeEach(angular.mock.module(Components, uiRouter, Services));
  let controller;
  let $state;
  let ArticleStore;
  const article = {
      id: 2,
      author: 'Keith Naughton',
      title: 'Just How Safe Is Driverless Car Technology, Really?',
      text: 'Self-driving cars are supposed to be our salvation, drastically reducing the 1.3 million road fatalities worldwide each year by replacing humans with robots who can do precision piloting and never get distracted, drowsy or drunk. So why did a self-driving Ube…"',
      date: '2018-03-27T04:25:00Z'
    };

  beforeEach(inject(($componentController, _$state_, _ArticleStore_) => {
    $state = _$state_;
    ArticleStore = _ArticleStore_;
    controller = $componentController('articles',
      {
        ArticleStore,
        $state
      },
      {
        articles: mockArticles
      }
    );
  }));

  it('Controller', () => {
    $state.go = jest.fn();
    controller.editArticle(article);
    expect($state.go).toHaveBeenCalledWith("articles.update", {article});
  });


});