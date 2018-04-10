const config = require('./webpack.config.common');
const OPTIONS = require('./options');

/* DEV SERVER CONFIG */
const devServerConfig = {
    contentBase: OPTIONS.distPath,
    port: 9000,
    open: true
    // stats: 'errors-only'
};
config.browserConfig.devServer = devServerConfig;
config.serverConfig.devServer = devServerConfig;

// config.devtool = 'eval';
config.browserConfig.devtool = 'cheap-module-source-map';
config.serverConfig.devtool = 'cheap-module-source-map';

module.exports = [config.browserConfig, config.serverConfig];
