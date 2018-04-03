import { GET_PLIPS_LIST, DELETE_PLIP } from '../constants/constants';

const initialState = {
  plips: []
};

export default function plipsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLIPS_LIST:
      return {
        ...state,
        plips: action.payload
      };
    case DELETE_PLIP:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
}
