const config = require('./webpack.config.common');
const OPTIONS = require('./options');

/* DEV SERVER CONFIG */
config.devServer = {
    contentBase: OPTIONS.distPath,
    port: 9000,
    open: true
    // stats: 'errors-only'
};

// config.devtool = 'eval';
config.devtool = 'cheap-module-source-map';

module.exports = config;
