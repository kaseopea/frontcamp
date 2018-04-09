import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';
import ngResource from 'angular-resource';
import datePickerPopup from 'angular-ui-bootstrap-4/src/datepickerPopup';

import CONFIG from './app.config';
import {commonModule} from './common';
import { Components } from './components';
import { Services } from './services';
import { directivesModule } from './directives';
import { filtersModule } from './filters';

import routesConfig from './routes';

import '../scss/style.scss';
import '../index.html';

// Bootstrapping
angular.element(document).ready(() => angular.bootstrap(document, [CONFIG.appName]));

angular
    .module(CONFIG.appName, [
        ngResource,
        datePickerPopup,
        uiRouter,
        ngAnimate,
        ngTouch,
        commonModule,
        Components,
        Services,
        directivesModule,
        filtersModule
    ])
    .config(routesConfig).name;
