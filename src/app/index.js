import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate'
import ngTouch from 'angular-touch'
import uiBootstrap from 'angular-ui-bootstrap';

import CONFIG from './app.config';
import {commonModule} from './common';
import {componentsModule} from './components';
import {servicesModule} from './services';

import routesConfig from './routes';

import '../scss/style.scss';
import '../index.html';

// Bootstrapping
angular.element(document).ready(() => angular.bootstrap(document, [CONFIG.appName]));

angular
    .module(CONFIG.appName, [
        uiRouter,
        ngAnimate,
        ngTouch,
        uiBootstrap,
        commonModule,
        componentsModule,
        servicesModule
    ])
    .config(routesConfig);