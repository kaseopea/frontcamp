import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import plipsReducer from '../reducers/PlipsReducer';

const reducers = combineReducers({
  plips: plipsReducer
});

export default function (initialState = {}) {
  return createStore(reducers, initialState, applyMiddleware(thunk));
}
