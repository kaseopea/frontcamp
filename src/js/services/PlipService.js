import axios from 'axios';
import qs from 'qs';
import { getPlipsSuccess , getPlipByIdSuccess, addPlipSuccess, deletePlipSuccess} from '../redux/actions/PlipsActions';

class PlipService {
  constructor() {
    this.plips = [];
  }

  getPlips() {
    return async (dispatch) => {
      if (this.plips.length) {
        await dispatch(getPlipsSuccess(this.plips));
      } else {
        await axios({
          method: 'GET',
          url:'http://localhost:3030/plips/'
        })
          .then(res => {
            this.plips = res.data;
            dispatch(getPlipsSuccess(this.plips));
          })
          .catch(err => console.error(err));
      }
    };
  }

  getPlipById(plipId) {
    return async (dispatch) => {
      await axios({
        method: 'GET',
        url: `http://localhost:3030/plips/${plipId}`
      })
        .then(res =>  dispatch(getPlipByIdSuccess(res.data)))
        .catch(err => console.error(err));
    };
  }

  addPlip(plip) {
    return async (dispatch) => {
      await axios({
        method: 'POST',
        url: 'http://localhost:3030/plips/',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: qs.stringify(plip)
      })
        .then(res => dispatch(addPlipSuccess(res.data)))
        .catch(err => console.error(err));
    };
  }

  removePlip(plipId) {
    return async (dispatch) => {
      await axios({
        method: 'DELETE',
        url: `http://localhost:3030/plips/${plipId}`,
        data: qs.stringify(plipId)
      })
        .then(res => dispatch(deletePlipSuccess(res.data)))
        .catch(err => console.error(err));
    };
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