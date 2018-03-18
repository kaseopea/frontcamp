import TodoApp from '../../app.module';

class manageTodoCtrl {
    constructor($scope) {
        $scope.submitHandler = this.submitHandler;
        $scope.todo = {
            text: '',
            completed: false
        };
    }

    submitHandler() {
        this.todo.date = new Date(Date.now());
        if (this.updateTodo) {
            this.updateTodoHandler()(this.todo);
        } else {
            this.addTodoHandler()(this.todo);
        }
    }
}
function manageTodoDirective() {
    return {
        restrict: 'E',
        scope: {
            updateTodo: '=',
            addTodoHandler: '&',
            updateTodoHandler: '&'
        },
        controller: manageTodoCtrl,
        template: `
        <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <span ng-if="updateTodo">Update todo</span>
                            <span ng-if="!updateTodo">Add todo</span>
                        </h5>
                        <form ng-submit="submitHandler()">
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" ng-model="todo.text" class="form-control required" placeholder="Todo description" value="Отдахнуть" />
                                </div>
                                <div class="col">
                                    <button type="submit" class="btn btn-primary">
                                        <span ng-if="updateTodo">Update</span>
                                        <span ng-if="!updateTodo">Add</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        `
    }
}


export default angular.module(TodoApp).directive('manageTodo', manageTodoDirective).name;
