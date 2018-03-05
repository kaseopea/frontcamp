import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../common/appComponent';

export default () => {
    const appContent = renderToString(<App />);
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>React server rendering example</title>
            <link rel="stylesheet" href="style.css">
            <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
        </head>
        <body>
            <div id="root">${ appContent(<App />) }</div>
            <script src="vendor.js"></script>
            <script src="bundle.js"></script>
        </body>
        </html>
    `;
};
