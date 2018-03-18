import TodoApp from '../../app.module';

class todosListDirectiveCtrl {
    constructor($scope) {
    }

}
function todosListDirective() {
    return {
        restrict: 'E',
        scope: {
            todos: '=',
            filter: '='
        },
        controller: todosListDirectiveCtrl,
        template: `
        <div class="card todo" ng-repeat="todo in todos | filter: filter | orderBy:'-date'">
            <div class="card-body">
                <h2 class="card-title">
                    <input type="checkbox" ng-if="!todo.completed" ng-click="completeTodoHandler()"> {{::todo.text}}
                </h2>
                <p class="card-text" ng-if="!todo.completed">id: {{todo.id}} | date: {{todo.date | date:'dd/MM/yyyy'}}</p>
            </div>
        </div>
        `
    }
}


export default angular.module(TodoApp).directive('todosList', todosListDirective).name;
