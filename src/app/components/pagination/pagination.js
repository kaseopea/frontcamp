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

    /*setPage(page) {
        this.activePage = page;
        console.warn(`Setting page to ${page} = `, this.activePage);
    }*/
}

export default {
    template,
    bindings:{
        activePage: '=',
        pageSize: '<',
        totalItems: '<',
        setPage: '&'
    },
    controller: Controller
};
