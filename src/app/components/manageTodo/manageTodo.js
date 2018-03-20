import template from './manageTodo.html';


class Controller {
    /** @ngInject */
    constructor() {
        this.todo = {
            text: '',
            completed: false
        };
    }

    $onChanges(changes) {
        const activeTodo = (changes.activeTodo) ? changes.activeTodo.currentValue : null;
        if (activeTodo) {
            this.todo.text = activeTodo.text;
            this.todo.id = activeTodo.id;
            this.todo.completed = activeTodo.completed;
        }
    }

    submitHandler() {
        this.todo.date = new Date(Date.now());
        return  (this.activeTodo) ? this.onUpdate(this.todo) : this.onAdd()(this.todo);
    }
}

export default {
    template,
    bindings: {
        activeTodo: '<',
        onAdd: '&',
        onUpdate: '&'
    },
    controller: Controller
};
