/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    $stateProvider
        .state('articles', {
            abstract: true,
            url: '/',
            component: 'app'
        })
        .state('articles.list', {
            url: '',
            component: 'articles',
            resolve: {
                articles: ArticleStore => ArticleStore.getArticles(),
                articlesResource: ArticlesResource => ArticlesResource.get({}).$promise
            }
        })
        .state('articles.add', {
            url: 'add-todo',
            component: 'manageArticle'
        })
        .state('articles.update', {
            url: 'edit-todo',
            component: 'manageArticle',
            params: {
                article: null
            }
        });

    $urlRouterProvider.otherwise('/');

}

export default routesConfig;