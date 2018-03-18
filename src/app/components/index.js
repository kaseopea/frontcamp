import angular from 'angular';
import CONFIG from '../app.config';

import app from './app/app';

export const componentsModule = CONFIG.appName.concat('.components');

angular
  .module(componentsModule, [])
  .component('app', app);
