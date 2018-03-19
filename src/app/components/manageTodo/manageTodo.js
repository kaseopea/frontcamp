import template from './manageTodo.html';


class Controller {
    /** @ngInject */
    constructor() {
        this.todo = {
            text: 'Отдахнуть',
            completed: false,
            date: null
        };
    }

    submitHandler() {
        this.todo.date = new Date(Date.now());

        if (this.updateTodo) {
            this.onUpdate()(this.todo);
        } else {
            // this.addTodoHandler()(this.todo);
            this.onAdd({
                $event: {
                    todo: this.todo
                }
            });
        }
    }
}

export default {
    template,
    bindings: {
        updateTodo: '<',
        onAdd: '&',
        onUpdate: '&'
    },
    controller: Controller
};
