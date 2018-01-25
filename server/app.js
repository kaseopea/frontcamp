const express = require('express');
const config = require('./config.json');
const jsonMockData = require('./mockData.json');
const app = express();

app.get('*', (req, res) => {
    res.json(jsonMockData);
});

app.listen(config.appPort, () => console.log(`Amazing app listening on port ${config.appPort}!`));