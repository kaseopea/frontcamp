/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('todo', {
            abstract: true,
            url: '/',
            component: 'app'
        })
        .state('todo.list', {
            url: '',
            component: 'todo',
            resolve: {
                todos: TodoStore => TodoStore.getTodos(),
                todosResource: TodoResource => TodoResource.get({}).$promise
            }
        })
        .state('todo.addTodo', {
            url: 'add-todo',
            component: 'manageTodo'
        })
        .state('todo.updateTodo', {
            url: 'edit-todo',
            component: 'manageTodo',
            params: {
                todo: null
            }
        });

    $urlRouterProvider.otherwise('/');

}

export default routesConfig;