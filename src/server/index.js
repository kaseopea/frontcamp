import express from 'express';
import serverConfig from './config';
import { renderer } from './helpers/renderer';

/* Define and App */
const app = express();

/* Request Handler */
const requestHandler = (req, res) => {
    res.send(renderer());
};

/* Static */
app.use(express.static('public'));

/* Request handler */
app.get('*', requestHandler);

/* Server */
app.listen(serverConfig.appPort, () => console.log(`${serverConfig.appName} listening on port ${serverConfig.appPort}!`));
