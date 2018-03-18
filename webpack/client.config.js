const OPTIONS = require('./options');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const IS_PROD_MODE = (process.env.NODE_ENV === 'prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
const config = {
    entry: {
        bundle: './src/app/index.js',
        vendor: ['babel-polyfill', 'whatwg-fetch', 'jquery', 'popper.js', 'bootstrap']
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
                            minimize: IS_PROD_MODE,
                            sourceMap: !IS_PROD_MODE
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: !IS_PROD_MODE
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !IS_PROD_MODE
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
    plugins: [IndexPagePlugin, extractSASSPlugin]
};

/* ---------------------------------- PROD & DEV MODE EXTRAS ---------------------------------- */
if (IS_PROD_MODE) {
    /* Uglify in Production Mode  */
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
} else {
    /* DEV SERVER CONFIG */
    const devServerConfig = {
        contentBase: OPTIONS.serverBuildPath,
        port: 9000,
        open: true
        // stats: 'errors-only'
    };
    config.devServer = devServerConfig;
    config.devtool = 'cheap-module-source-map';
}

module.exports = config;
