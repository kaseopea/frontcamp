import template from './todoItem.html';

export default {
    template,
    bindings: {
        todo: '<',
        completeHandler: '&',
        editHandler: '&'
    }
};
