// import _ from 'lodash';

export default class PaginationService {
    constructor() {
        this.defaults = {
            currentPage: 1,
            pageSize: 3
        };
    }

    getPager(totalItems, activePage, itemsPerPage) {
        // default to first page
        const currentPage = activePage || this.defaults.currentPage;
        const pageSize = itemsPerPage || this.defaults.pageSize;
        let startPage = null;
        let endPage = null;

        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        // const pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex
        };
    }

}
