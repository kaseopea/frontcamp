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
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
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
            from: new Date(Date.now()),
            to: new Date(Date.now())
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
