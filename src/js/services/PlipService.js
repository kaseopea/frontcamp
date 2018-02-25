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

    removePlip(plipId) {
        let removedPlip = null;
        const filteredPlips = this.plips.filter(plip => {
            const plipEqual = plip.id === plipId;
            if (plipEqual) {
                removedPlip = plip;
            }
            return !plipEqual;
        });
        this.plips = filteredPlips;
        return removedPlip;
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