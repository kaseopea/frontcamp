import _ from 'lodash';
import uuidV4 from 'uuid/v4';
import ARTICLES_MOCK_DATA from '../../mockData/articlesMock';

export default class ArticleStore {
  constructor() {
    this.articles = ARTICLES_MOCK_DATA || [];
  }

  getArticles() {
    return this.articles;
  }

  addArticle(article) {
    article.id = uuidV4();
    return this.articles.push(article);
  }

  updateArticle(article) {
    const articleIndex = _.findIndex(this.articles, {id: article.id});
    this.articles[articleIndex] = Object.assign(this.articles[articleIndex], article, {
      date: new Date(Date.now())
    });
    return this.articles[articleIndex];
  }

}
