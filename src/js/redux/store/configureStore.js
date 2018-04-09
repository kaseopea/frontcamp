import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import plipsReducer from '../reducers/PlipsReducer';

const composeEnhancers = compose;//(typeof window === 'undefined') ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// Combine Reducers
const reducers = combineReducers({
  plipsState: plipsReducer
});

export default function (initialState = {}) {
  return createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
}
