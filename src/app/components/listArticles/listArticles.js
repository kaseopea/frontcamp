import template from './listArticles.html';

class Controller {
    articleDblClick(article) {
        this.editHandler({article});
    }
}

export default {
    template,
    bindings: {
        articles: '<',
        editHandler: '&'
    },
    controller: Controller
};
