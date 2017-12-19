const webpack = require('webpack');
const config = require('./webpack.config.common');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Minimize JS
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));

// Minimize CSS
/*config.plugins.push(
    new OptimizeCssAssetsPlugin()
);*/

module.exports = config;
