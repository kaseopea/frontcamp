export class SortingStrategy {
    constructor() {
        this.sortStrategy = null;
    }

    setStrategy(strategy) {
        this.sortStrategy = strategy;
    }

    sort(data) {
        return this.sortStrategy.process(data);
    }

}
/* UTILS */
function compareValues(key, order='asc') {
    return function(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (order === 'desc') ? (comparison * -1) : comparison;
    };
}

function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        const j = i + Math.floor(Math.random() * (sourceArray.length - i));
        const temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

/* STRATEGIES */
export const ShuffleStrategy = function () {
    this.process = data => shuffle(data);
};

export const AscSortStrategy = function () {
    this.process = data => data.sort(compareValues('name'));
};

export const DescSortStrategy = function () {
    this.process = data => data.sort(compareValues('name', 'desc'));
};