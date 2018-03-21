import moment from 'moment';
import template from './filterTodo.html';
import './assets/calendar.svg';

class Controller {
    /** @ngInject */
    constructor() {
        /* Calendars */
        this.calendars = {
            from: {
                opened: false
            },
            to: {
                opened: false
            }
        };
        /* Date Picker Options */
        this.datePickerOptions = {
            format: 'dd.MM.yyyy',
            dateOptions: {
                formatYear: 'yy',
                maxDate: moment(),
                minDate: moment().subtract(.5, 'years'),
                startingDay: 1
            },
            altInputFormats: ['M!/d!/yyyy']
        };
    }

    toggleCalendar(calendar) {
        this.calendars[calendar].opened = !this.calendars[calendar].opened;
    }

    resetFilter() {
        this.filterByText = '';
        this.filterByDate = {
            from: moment().subtract(.5, 'years'),
            to: moment()
        };
    }

}

export default {
    template,
    bindings: {
        filterByText: '=',
        filterByDate: '=',
    },
    controller: Controller
};
