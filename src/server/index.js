import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import App from '../js/appComponent';
import serverConfig from './config';
import routes from '../js/routes/routes';

import configureStore from '../js/redux/store/configureStore';


/* Define and App */
const app = express();

/* Request Handler */
const requestHandler = (req, res) => {
  // Create a new Redux store instance
  const store = configureStore();
  const branch = matchRoutes(routes, req.path);

  console.log(branch);

  const promises = branch.map(({route}) => {
    const {fetchData} = route.component;
    return fetchData instanceof Function ?
      fetchData(store.dispatch) :
      Promise.resolve(null);
  });

  return Promise.all(promises).then(() => {
    const context = {};
    const appWithRouter = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
          <App/>
        </StaticRouter>
      </Provider>
    );

    const html = ReactDOMServer.renderToString(appWithRouter);

    if (context.url) {
      res.redirect(context.url);
      return;
    }
    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    handleRender(res, preloadedState, html);
  });
};

function handleRender(res, preloadedState, html) {
  const output = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>React server rendering example</title>
            <link rel="stylesheet" href="style.css">
            <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" 
            integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="vendor.js"></script>
            <script src="app.js"></script>
             <script>
              // WARNING: See the following for security issues around embedding JSON in HTML:
              // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
              window.__PRELOADED_STATE__ = $\{JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
            </script>
        </body>
        </html>
    `;

  res.status(200).send(output);
}

/* Static */
app.use(express.static('public'));

/* Request handler */
app.get('*', requestHandler);

/* Server */
app.listen(serverConfig.appPort, () => console.log(`${serverConfig.appName} listening on port ${serverConfig.appPort}!`));
