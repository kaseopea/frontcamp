import moment from 'moment';

function todoDateFilterFn() {
    return (date) => {
        moment.locale('ru');
        return moment(date).fromNow();
    };
}

export default todoDateFilterFn;