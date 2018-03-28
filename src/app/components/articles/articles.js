import template from './articles.html';

class Controller {
    /** @ngInject */
    constructor(ArticleStore, $state, PaginationService) {
        this.store = ArticleStore;
        this.$state = $state;
        this.paginationService = PaginationService;

        this.pager = {};
        this.articlesPaged = [];
        this.currentPage = 1;
        this.activeArticle = null;
        this.editArticleHandler = this.editArticle.bind(this);
        this.setPageHandler = this.setPage.bind(this);
    }

    $onInit() {
        /* Pagination */
        this.totalItems = this.articles.length;
        this.setPage(this.currentPage);
    }

    editArticle(article) {
        this.$state.go('articles.update', {article});
    }

    setPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.paginationService.getPager(this.articles.length, page);
        this.articlesPaged = this.articles.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
