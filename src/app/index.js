import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngResource from 'angular-resource';
import datePickerPopup from 'angular-ui-bootstrap-4/src/datepickerPopup';

import CONFIG from './app.config';
import { commonModule } from './common';
import { componentsModule } from './components';
import { servicesModule } from './services';
import { directivesModule } from './directives';

import routesConfig from './routes';

import '../scss/style.scss';
import '../index.html';

// Bootstrapping
angular.element(document).ready(() => angular.bootstrap(document, [CONFIG.appName]));

export const AppMain = angular
  .module(CONFIG.appName, [
    ngResource,
    datePickerPopup,
    uiRouter,
    commonModule,
    componentsModule,
    servicesModule,
    directivesModule
  ]).config(routesConfig).name;
