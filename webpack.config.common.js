const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OPTIONS = require('./options');
const nodeExternals = require('webpack-node-externals');
const IS_DEV_MODE = (process.env.NODE_ENV === 'development');


/* ---------------------------------- STYLES ---------------------------------- */
const extractSASSPlugin = new ExtractTextPlugin({
    filename: 'style.css'
});

/* ---------------------------------- INDEX PAGE ---------------------------------- */
const IndexPagePlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    excludeChunks: ['viewer']
});

/* ---------------------------------- MAIN CONFIG ---------------------------------- */
const browserConfig = {
    entry: {
        app: './src/browser/index.js',
        vendor: ['babel-polyfill', 'whatwg-fetch']
    },
    output: {
        path: OPTIONS.publicPath,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: 'html-loader',
            },
            {
                test: /\.scss/,
                use: extractSASSPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: !IS_DEV_MODE,
                            sourceMap: IS_DEV_MODE
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: IS_DEV_MODE
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV_MODE
                        }
                    }
                ])
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|dist)/,
                use: 'babel-loader'
            },
            {
                test: /\.ejs$/,
                use: 'ejs-compiled-loader'
            },
            {
                test: /\.json$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'json/[name].[ext]'
                        }
                    },
                    {
                        loader: 'json-loader'
                    },
                    {
                        loader: './plugins/webpack-remove-number-attrs-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|ico)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]',
                            publicPath: './'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [extractSASSPlugin]
};
// IndexPagePlugin

const serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: OPTIONS.buildPath,
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|dist)/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|svg|ico)$/,
                use: 'file-loader?name=media/[name].[ext]&publicPath=./'
            },
            {
                test: /\.(png|jpg|svg|ico)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]',
                            publicPath: './',
                            emit: false
                        }
                    }
                ]
            },
            {
                test: /\.scss/,
                use: extractSASSPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: !IS_DEV_MODE,
                            sourceMap: IS_DEV_MODE
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: IS_DEV_MODE
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV_MODE
                        }
                    }
                ])
            }
        ]
    },
    plugins: [extractSASSPlugin]
};


module.exports = {browserConfig, serverConfig};
