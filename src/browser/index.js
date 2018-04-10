import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../js/redux/store/configureStore';
import routes from '../js/routes/routes';
import { renderRoutes } from 'react-router-config';

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
      { renderRoutes(routes) }
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
