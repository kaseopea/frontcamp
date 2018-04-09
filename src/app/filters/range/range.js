import _ from 'lodash';

export default function() {
    return (input, startPage, endPage) => _.range(startPage, endPage + 1);
}