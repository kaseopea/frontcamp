import axios from 'axios';

class PlipService {
  constructor() {
    this.plips = [];
  }

  getPlips() {
      return new Promise((resolve, reject) => {
        if (this.plips.length) {
          resolve(this.plips);
        }
        axios.get('http://localhost:3030/plips/')
          .then(res => {
            this.plips = res.data;
            resolve(this.plips);
          })
          .catch(err => reject(err));

      });
  }

  addPlip(plip) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3030/plips/', plip)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  removePlip(plipId) {
    return new Promise((resolve, reject) => {
      axios.delete(`http://localhost:3030/plips/${plipId}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
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