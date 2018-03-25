export default class uiRouterDebug {
    constructor($rootScope) {
        $rootScope.$on('$stateChangeStart', uiRouterDebug.stateChangeStartFn);
        $rootScope.$on('$stateChangeError', uiRouterDebug.stateChangeErrorFn);
        $rootScope.$on('$stateChangeSuccess', uiRouterDebug.stateChangeSuccessFn);
        $rootScope.$on('$viewContentLoaded', uiRouterDebug.viewContentLoadedFn);
        $rootScope.$on('$stateNotFound', uiRouterDebug.stateNotFoundFn);
    }

    static stateChangeStartFn(event, toState, toParams, fromState, fromParams) {
        console.log(`$stateChangeStart to ${toState.to} - fired when the transition begins. toState,toParams:`, toState, toParams);
    }

    static stateChangeErrorFn(...args) {
        console.log('$stateChangeError - fired when an error occurs during transition.');
        console.log(args);
    }

    static stateChangeSuccessFn(event, toState, toParams, fromState, fromParams) {
        console.log(`$stateChangeSuccess to ${toState.name}- fired once the state transition is complete.`);
    }

    static viewContentLoadedFn(event) {
        console.log('$viewContentLoaded - fired after dom rendered', event);
    }

    static stateNotFoundFn(event, unfoundState, fromState, fromParams) {
        console.log(`$stateNotFound ${unfoundState.to} - fired when a state cannot be found by its name.`);
        console.log(unfoundState, fromState, fromParams);
    }

}
