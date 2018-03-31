import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../js/appComponent';
import serverConfig from './config';

/* Define and App */
const app = express();

/* Request Handler */
const requestHandler = (req, res) => {
  const context = {};
  const appContents = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
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
            <div id="root">${appContents}</div>
            <script src="vendor.js"></script>
            <script src="app.js"></script>
        </body>
        </html>
    `;
    res.send(output);
  }
};

/* Static */
app.use(express.static('public'));

/* Request handler */
app.get('*', requestHandler);

/* Server */
app.listen(serverConfig.appPort, () => console.log(`${serverConfig.appName} listening on port ${serverConfig.appPort}!`));
