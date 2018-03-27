const express = require('express');
const appConfig = require('./config.json');
const articlesJson = require('./mockData/articles.json');
const app = express();

/* Setting alternative views directory */
app.use(express.static('public'));

/* send todos */
app.get('/articles/all.json', (req, res) => {
    res.json(articlesJson);
});

/* uncaughtException error handling */
process.on('uncaughtException', (err) => console.log(err));

/* Server */
app.listen(appConfig.appPort, () => console.log(`${appConfig.appName} listening on port ${appConfig.appPort}!`));
