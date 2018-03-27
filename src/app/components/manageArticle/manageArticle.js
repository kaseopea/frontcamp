import uuidV4 from 'uuid/v4';
import template from './manageArticle.html';

class Controller {
    /** @ngInject */
    constructor($state, ArticleStore) {
        const emptyArticle = {
            id: uuidV4(),
            author: '',
            title: '',
            text: '',
            date: ''
        };
        this.store = ArticleStore;
        this.$state = $state;
        this.activeArticle = $state.params.article || emptyArticle;
        this.isUpdate = !!$state.params.article;
    }

    submitHandler() {
        this.activeArticle.date = new Date(Date.now());
        if (this.isUpdate) {
            this.store.updateArticle(this.activeArticle);
        } else {
            this.store.addArticle(this.activeArticle)
        }
        this.$state.go('articles.list');
    }
}

export default {
    template,
    controller: Controller
};
