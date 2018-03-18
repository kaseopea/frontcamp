const express = require('express');
const appConfig = require('./config.json');
const path = require('path');

const app = express();

/* Setting alternative views directory */
app.use(express.static('public'));

/* uncaughtException error handling */
// process.on('uncaughtException', (err) => console.log(err));

/* Server */
app.listen(appConfig.appPort, () => console.log(`${appConfig.appName} listening on port ${appConfig.appPort}!`));
