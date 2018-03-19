/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
        .state('todo', {
            abstract: true,
            url: '/',
            component: 'app'
        })
        .state('todo.all', {
            url: '',
            component: 'todo',
            resolve: {
                filter: () => 'all'
            }
        })
        .state('todo.active', {
            url: 'active',
            component: 'todo',
            resolve: {
                filter: () => 'active'
            }
        })
        .state('todo.completed', {
            url: 'completed',
            component: 'todo',
            resolve: {
                filter: () => 'completed'
            }
        });

    $urlRouterProvider.otherwise('/');

}

export default routesConfig;