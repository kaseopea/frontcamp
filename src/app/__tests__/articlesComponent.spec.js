import uiRouter from '@uirouter/angularjs';
import { Components } from '../components/index';
import { Services } from '../services/index';
import DATA_MOCK from '../mockData/articlesMock';

describe('Component: Articles', () => {
  beforeEach(angular.mock.module(Components, uiRouter, Services));

  let controller;
  let $state;
  let ArticleStore;
  let PaginationService;
  const article = {
      id: 2,
      author: 'Keith Naughton',
      title: 'Just How Safe Is Driverless Car Technology, Really?',
      text: 'Self-driving cars are supposed to be our salvation, drastically reducing the 1.3 million road fatalities worldwide each year by replacing humans with robots who can do precision piloting and never get distracted, drowsy or drunk. So why did a self-driving Ube…"',
      date: '2018-03-27T04:25:00Z'
    };


  beforeEach(inject(($componentController, _$state_, _ArticleStore_, _PaginationService_) => {
    $state = _$state_;
    ArticleStore = _ArticleStore_;
    PaginationService = _PaginationService_;

    controller = $componentController('articles',
      {
        ArticleStore,
        $state,
        PaginationService
      },
      {
        articles: DATA_MOCK
      }
    );
  }));

  it('Controller: editArticle Handler', () => {
    $state.go = jest.fn();
    controller.editArticle(article);
    expect($state.go).toHaveBeenCalledWith("articles.update", {article});
  });


  // it('Controller: setPage Handler', () => {
  //   const totalItems = DATA_MOCK.length;
  //   const activePage = 3;
  //   PaginationService.getPager = jest.fn();
  //
  //   console.log('totalItems', totalItems);
  //   console.log('activePage', activePage);
  //
  //   controller.setPage(activePage);
  //   expect(PaginationService.getPager).toHaveBeenCalledWith(totalItems, activePage);
  // });


});