const express = require('express');
const router = require('./router');
const appConfig = require('./config.json');
const path = require('path');
const app = express();

/* Setting Express View Engine (PUG by default) */
app.set('view engine', 'pug');

/* Setting alternative views directory */
app.set('views', path.join(__dirname, '/views'));

/* Add router */
app.use('/', router);

/* uncaughtException error handling */
process.on('uncaughtException', function (err) {
    console.log(err);
});

/* Server */
app.listen(appConfig.appPort, () => console.log(`${appConfig.appName} listening on port ${appConfig.appPort}!`));