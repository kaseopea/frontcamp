import moment from 'moment';
import template from './articles.html';

class Controller {
    /** @ngInject */
    constructor(ArticleStore, $state) {
        this.store = ArticleStore;
        this.$state = $state;
        this.activeArticle = null;
        this.editArticleHandler = this.editArticle.bind(this);
    }

    editArticle(article) {
        this.$state.go('articles.update', {article});
    }
}

export default {
    template,
    bindings: {
        articles: '<',
        articlesResource: '<'
    },
    controller: Controller
};