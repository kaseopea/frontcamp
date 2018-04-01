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

    filterByUsername(plips, username) {
        return plips.filter(plip => plip.author === username);
    }
}

export default new AuthorService();
