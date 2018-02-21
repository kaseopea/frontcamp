import {PLIPMOCK} from '../mocks/plipsMock';

class PlipService {
    constructor() {
        this.plips = PLIPMOCK;
    }

    getPlips() {
        return this.plips;
    }

    addPlip(plip) {
        this.plips.push(plip);
    }

    sortPlips(plips, sortOrder) {
        return plips.sort((a, b) => {
            return (sortOrder === 'desc') ? (b.content > a.content) : (a.content > b.content);
        });
    }

    filterPlipsByAuthor(userName) {
        return this.plips.filter(plip => (plip.author === userName));
    }
}

export default new PlipService();