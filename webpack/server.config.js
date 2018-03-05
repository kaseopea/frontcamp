const OPTIONS = require('./options');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: './src/server/index.js',
    output: {
        path: OPTIONS.serverBuildPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|dist)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss/,
                loader: 'css-loader!sass-loader'
            }
        ]
    }

};
