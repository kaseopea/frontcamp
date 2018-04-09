export default class PaginationService {
    constructor() {
        this.defaults = {
            currentPage: 1,
            pageSize: 3
        };
        this.totalItems = 0;
        this.currentPage = null;
        this.pageSize = null;

        this.totalPages = 0;
        this.startPage = null;
        this.endPage = null;
        this.startIndex = null;
        this.endIndex = null;
    }

    getPager(totalItems, currentPage, itemsPerPage) {
        // default to first page
        this.currentPage = currentPage || this.defaults.currentPage;
        this.pageSize = itemsPerPage || this.defaults.pageSize;
        this.totalItems = totalItems;

        // calculate total pages
        this.totalPages = this.getTotalPages();

        if (currentPage > this.totalPages) {
            return null;
        }

        this.setStartEndPages();
        this.setIndexes();

        // return object with all pager properties required by the view
        return {
            totalItems: this.totalItems,
            currentPage: this.currentPage,
            pageSize: this.pageSize,
            totalPages: this.totalPages,
            startPage: this.startPage,
            endPage: this.endPage,
            startIndex: this.startIndex,
            endIndex: this.endIndex
        };
    }

    setStartEndPages() {
        if (this.totalPages <= 10) {
            this.startPage = 1;
            this.endPage = this.totalPages;
        } else if (this.currentPage <= 6) {
            this.startPage = 1;
            this.endPage = 10;
        } else if (this.currentPage + 4 >= this.totalPages) {
            this.startPage = this.totalPages - 9;
            this.endPage = this.totalPages;
        } else {
            this.startPage = this.currentPage - 5;
            this.endPage = this.currentPage + 4;
        }
    }

    getTotalPages() {
        return Math.ceil(this.totalItems / this.pageSize);
    }

    setIndexes() {
        this.startIndex = (this.currentPage - 1) * this.pageSize;
        this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.totalItems - 1);
    }

}
