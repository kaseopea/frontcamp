const appConfig = require('./config.json');
const winston = require('winston');

winston.add(winston.transports.File, {
    filename: appConfig.logFilename
});

module.exports = () => ({
    info: (message) => winston.info(`${new Date(Date.now())} | ${message}`),
    error: (message) => winston.error(`${new Date(Date.now())} | ${message}`),
    warn: (message) => winston.warn(`${new Date(Date.now())} | ${message}`),
    debug: (message) => winston.log('debug', `${new Date(Date.now())} | ${message}`),
    log: () => winston
});