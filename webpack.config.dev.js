const config = require('./webpack.config.common');
const OPTIONS = require('./options');

/* DEV SERVER CONFIG */
const DEV_SERVER_CONFIG = {
    contentBase: OPTIONS.distPath,
    port: 9000,
    open: true
    // stats: 'errors-only'
};

config.devServer = DEV_SERVER_CONFIG;
config.devtool = 'source-map';

module.exports = config;
