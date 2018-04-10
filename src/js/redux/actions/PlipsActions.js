import {
  GET_PLIPS_LIST,
  DELETE_PLIP,
  GET_AUTHOR_PLIPS,
  ADD_PLIP,
  GET_PLIP_BY_ID
} from '../constants/constants';
import PlipService from '../../services/PlipService';

export function loadPlips() {
  return (dispatch) => {
    PlipService.getPlips()
      .then(plips => {
        dispatch(getPlipsSuccess(plips));
      })
      .catch(err => console.error(err));
  };
}

export function getPlipsSuccess(plips) {
  return {
    type: GET_PLIPS_LIST,
    payload: plips
  };
}

export function getPlipById(id) {
  return (dispatch) => {
    PlipService.getPlipById(id)
      .then(plip => {
        dispatch(getPlipByIdSuccess(plip));
      })
      .catch(err => console.error(err));
  };
}

export function getPlipByIdSuccess(plip) {
  return {
    type: GET_PLIP_BY_ID,
    payload: plip
  };
}

export function getAuthorPlipsSuccess(plips) {
  return {
    type: GET_AUTHOR_PLIPS,
    payload: plips
  };
}

export function addPlip(plip) {
  return (dispatch) => {
    PlipService.addPlip(plip)
      .then(data => {
        dispatch(addPlipSuccess(data));
        dispatch(loadPlips());
      })
      .catch(err => console.error(err));
  };
}

export function addPlipSuccess(plip) {
  return {
    type: ADD_PLIP,
    payload: plip
  };
}

export function removePlip(id) {
  return (dispatch) => {
    PlipService.removePlip(id)
      .then(plips => {
        dispatch(deletePlipSuccess(plips));
        dispatch(loadPlips());
      })
      .catch(err => console.error(err));
  };
}

export function deletePlipSuccess(id) {
  return {
    type: DELETE_PLIP,
    payload: id
  };
}
