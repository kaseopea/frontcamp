import template from './pagination.html';
import APPCONST from '../../const/appConst';

class Controller {
    /** @ngInject */
    constructor(PaginationService) {
        this.paginationService = PaginationService;
    }

    $onInit() {
        this.pageSize = this.pageSize || APPCONST.articlesPerPage;
        this.pager = this.paginationService.getPager(this.totalItems, this.activePage);
    }

    setActivePage(page) {
        this.activePage = page;
        this.setPage({page})(page);
    }
}

export default {
    template,
    bindings:{
        activePage: '<',
        pageSize: '<',
        totalItems: '<',
        setPage: '&'
    },
    controller: Controller
};
