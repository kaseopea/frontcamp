const OPTIONS = require('./options');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    entry: './server/app.js',
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
            }
        ]
    }

};
