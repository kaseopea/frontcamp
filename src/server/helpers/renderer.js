import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../../common/Routes';

export default req => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes/>
        </StaticRouter>
    );
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>React server rendering example</title>
            <link rel="stylesheet" href="style.css">
            <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" 
            integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" 
            crossorigin="anonymous">
        </head>
        <body>
            <div id="root">${ content }</div>
            <script src="vendor.js"></script>
            <script src="bundle.js"></script>
        </body>
        </html>
    `;
};
