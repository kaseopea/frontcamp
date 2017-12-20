const ExtractTextPlugin = require('extract-text-webpack-plugin');
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


/* CSS */
const extractSASSPlugin = new ExtractTextPlugin({
    filename: 'style-[hash].css'
});

config.module.rules.push({
    test: /\.scss/,
    use: extractSASSPlugin.extract([{
        loader: 'css-loader'
    }, {
        loader: 'sass-loader'
    }])
});

config.plugins.push(extractSASSPlugin);

module.exports = config;
