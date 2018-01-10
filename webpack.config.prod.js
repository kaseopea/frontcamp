const webpack = require('webpack');
const config = require('./webpack.config.common');

// Minimize JS
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
}));

module.exports = config;
