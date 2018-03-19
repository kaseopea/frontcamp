import TodoApp from '../app.module';

class TodoCtrl {
    constructor($scope, TodoStore) {
        this.store = TodoStore;
        $scope.todos = TodoStore.getTodos();
        $scope.todosIncompleted = this.store.getIncompletedTodos();
        $scope.todosCompleted = this.store.getCompletedTodos();
        $scope.completeTodoHandler = this.completeTodo;
        $scope.activeTodo = null;

        $scope.addTodoHandler = this.addTodo;
        $scope.updateTodoHandler = this.updateTodo.bind(this);

    }

    addTodo(todo) {
        this.store.addTodo(todo);
        this.$scope.todosIncompleted = this.store.getIncompletedTodos();
        this.$scope.todosCompleted = this.store.getCompletedTodos();
    }

    updateTodo(data) {
        alert('update');
        console.warn(data);
    }

    completeTodo() {
        console.warn('completeTodo');
    }


}

export default angular.module(TodoApp).controller('TodoCtrl', TodoCtrl);
