import { GET_PLIPS_LIST, DELETE_PLIP, GET_PLIP_BY_ID } from '../constants/constants';

const initialState = {
  plips: [],
  current: null
};

export default function plipsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLIPS_LIST:
      return {
        ...state,
        list: action.payload
      };
    case DELETE_PLIP:
      return {
        ...state,
        id: action.payload
      };
    case GET_PLIP_BY_ID:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
}
