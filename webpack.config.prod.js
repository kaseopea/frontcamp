const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const config = require('./webpack.config.common');

// Minimize JS
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));


/* CSS */
const extractSASSPlugin = new ExtractTextPlugin({
    filename: 'style-[hash].css'
});

config.module.rules.push({
    test: /\.scss/,
    use: extractSASSPlugin.extract([{
        loader: 'css-loader',
        options: {
            minimize: true
        }
    }, {
        loader: 'sass-loader'
    }])
});

config.plugins.push(extractSASSPlugin);


module.exports = config;
