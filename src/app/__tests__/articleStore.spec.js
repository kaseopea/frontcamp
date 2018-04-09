import { Components } from '../components/index';
import { Services } from '../services/index';
import DATA_MOCK from '../mockData/articlesMock';

describe('Service: ArticleStore Service', () => {
  beforeEach(angular.mock.module(Components, Services));
  let ArticleStore;

  beforeEach(inject((_ArticleStore_) => {
    ArticleStore = _ArticleStore_;
  }));

  it('getArticles Method', () => {
    const articles = ArticleStore.getArticles();
    expect(articles).toEqual(DATA_MOCK);
  });

  it('addArticle Method', () => {
    const totalItems = DATA_MOCK.length;
    const article = {
      author: 'James Paton',
      title: 'Glaxo to Buy Novartis Consumer Venture Stake for $13 Billion',
      text: 'GlaxoSmithKline Plc, the U.K.’s biggest drugmaker, agreed to buy out Novartis AG’s stake in their consumer-health joint venture for $13 billion rather than bidding for a Pfizer Inc. unit.',
      date: '2018-03-26T06:25:00Z'
    };
    const newTotalItems = ArticleStore.addArticle(article);
    expect(newTotalItems).toEqual(totalItems + 1);
  });


  it('updateArticle Method', () => {
    const updatedAuthor = 'James Paton UPDATED';
    const article = {
      id: 1,
      author: updatedAuthor
    };
    const newArticle = ArticleStore.updateArticle(article);
    expect(newArticle.author).toEqual(updatedAuthor);
  });

});