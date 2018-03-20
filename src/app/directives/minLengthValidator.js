function minLengthValidatorFn() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: ($scope, $element, $attr, ngModel) => {
            const minimalLength = parseInt($attr.minimalLength, 10);
            const validatorFn = (text) => !(text.length < minimalLength);
            ngModel.$validators['minimal-length'] = validatorFn;

        }
    };
}

export default minLengthValidatorFn;