import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '../js/redux/store/configureStore';
import App from '../js/appComponent';

let preloadedState = {};
// Grab the state from a global variable injected into the server-generated HTML
if (typeof window !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__;
  // Allow the passed state to be garbage-collected
  delete window.__PRELOADED_STATE__;
}
const store = configureStore(preloadedState);

ReactDOM.hydrate((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
