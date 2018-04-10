import axios from 'axios';
import qs from 'qs';

class PlipService {
  constructor() {
    this.plips = [];
  }

  getPlips() {
    return axios({
      method: 'GET',
      url: 'http://localhost:3030/plips/'
    }).then(res => {
      this.plips = res.data;
      return this.plips;
    });
  }

  getPlipById(plipId) {
    return axios({
      method: 'GET',
      url: `http://localhost:3030/plips/${plipId}`
    }).then(res => res.data);
  }

  addPlip(plip) {
    return axios({
      method: 'POST',
      url: 'http://localhost:3030/plips/',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(plip)
    }).then(res => res.data);
  }

  removePlip(plipId) {
    return axios({
      method: 'DELETE',
      url: `http://localhost:3030/plips/${plipId}`,
      data: qs.stringify(plipId)
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