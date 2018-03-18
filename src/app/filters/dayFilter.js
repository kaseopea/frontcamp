import TodoApp from '../app.module';
import _ from 'lodash';

function filterByDaysFn() {
    return todos => _.sortBy(todos, (todo) => !todo.date);
}

export default angular.module(TodoApp).filter('filterByDays', filterByDaysFn);
