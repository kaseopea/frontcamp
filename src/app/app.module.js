import angular from 'angular';
import CONFIG from "./app.config"

// Bootstrapping
angular.element(document).ready(function () {
    angular.bootstrap(document, [CONFIG.appName]);
});

// Main App module
export default angular.module(CONFIG.appName, []).name;
