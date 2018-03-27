import template from './listArticles.html';

class Controller {
}

export default {
    template,
    bindings: {
        articles: '<',
        editHandler: '&'
    },
    controller: Controller
};
