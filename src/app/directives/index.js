import angular from 'angular';
import CONFIG from '../app.config';

import minLengthValidatorFn from './minLengthValidator';

export const directivesModule = CONFIG.appName.concat('.directives');

angular
    .module(directivesModule, [])
    .directive('minimalLength', minLengthValidatorFn);
