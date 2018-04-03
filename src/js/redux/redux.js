import React, { Component } from 'react';
import * as Redux from 'redux';

const defaultState = {
  someDefaults: 'defaults',
  changeVar: 'test'
};
const reducer = (state = defaultState, action) => {
  console.log('New action', action);
  switch (action.type) {
    case 'CHANGE_VAR':
      return {
        ...state,
        changeVar: action.newVar
      };
    default:
      return state;
  }
};
const store = Redux.createStore(reducer, Redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

class DummyReduxComponent extends Component {
  constructor(props) {
    super(props);
    console.log(Redux);
    console.warn('currentState', store.getState());

    store.dispatch({
      type: 'CHANGE_VAR',
      newVar: 'test333'
    });

    store.dispatch({
      type: 'CHANGE_VAR',
      newVar: 'test444'
    });

    store.dispatch({
      type: 'CHANGE_VAR',
      newVar: 'test555'
    });

    console.warn('currentState', store.getState());
  }
  render() {
    return (
      <div />
    );
  }
}

export default DummyReduxComponent;
