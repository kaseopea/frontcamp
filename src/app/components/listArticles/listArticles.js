import template from './listArticles.html';

export default {
    template,
    bindings: {
        articles: '<',
        editHandler: '&'
    }
};
