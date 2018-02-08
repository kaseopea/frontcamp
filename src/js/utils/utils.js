import {ShuffleStrategy, AscSortStrategy, DescSortStrategy} from './sortingStrategy';

export class Utils {

    static getRandomStrategy() {
        const strategies = [new ShuffleStrategy(), new AscSortStrategy(), new DescSortStrategy()];
        return strategies[Math.floor(Math.random() * strategies.length)];
    }
}