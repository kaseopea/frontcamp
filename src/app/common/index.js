import angular from 'angular';
import CONFIG from '../app.config';

export const commonModule = CONFIG.appName.concat('.common');

angular
  .module(commonModule, [])
  .name;

