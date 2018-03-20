import template from './manageTodo.html';


class Controller {
    /** @ngInject */
    constructor() {
        this.todo = {
            text: '',
            completed: false,
            date: null
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

        if (this.activeTodo) {
            this.onUpdate(this.todo);
        } else {
            this.onAdd(this.todo);
        }
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
