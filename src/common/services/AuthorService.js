import {AUTHORS_LIST_MOCK} from '../mocks/authorsMock';

class AuthorService {
    constructor() {
        this.authors = AUTHORS_LIST_MOCK;
    }

    getAuthors() {
        return this.authors;
    }

    getAuthor(userName) {
        return this.authors.find(author => (author.username === userName));
    }
}

export default new AuthorService();
