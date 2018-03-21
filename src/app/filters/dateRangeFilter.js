import moment from 'moment';

function dateRangeFilterFn() {
    return (items, dateParams, dateField) => items.filter((item) => moment(item[dateField]).isBetween(dateParams.from, dateParams.to));
}

export default dateRangeFilterFn;