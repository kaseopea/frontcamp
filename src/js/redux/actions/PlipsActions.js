import { GET_PLIPS_LIST, DELETE_PLIP, GET_AUTHOR_PLIPS, ADD_PLIP, GET_PLIP_BY_ID } from '../constants/constants';

export function getPlipsSuccess(plips) {
  return {
    type: GET_PLIPS_LIST,
    payload: plips
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

export function addPlipSuccess(plip) {
  return {
    type: ADD_PLIP,
    payload: plip
  };
}

export function deletePlipSuccess(id) {
  return {
    type: DELETE_PLIP,
    payload: id
  };
}
