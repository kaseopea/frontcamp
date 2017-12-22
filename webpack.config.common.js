const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OPTIONS = require('./options');

const IS_DEV_MODE = (process.env.NODE_ENV === 'development');


/* ---------------------------------- STYLES ---------------------------------- */
const extractSASSPlugin = new ExtractTextPlugin({
    filename: 'style-[hash].css'
});

/* ---------------------------------- INDEX PAGE ---------------------------------- */
const IndexPagePlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  excludeChunks: ['viewer']
});

/* ---------------------------------- GOOGLE WEB FONTS ---------------------------------- */
const GoogleWebFontsPlugin = new GoogleFontsPlugin({
  fonts: [
    { family: 'Montserrat', variants: ['700', '900'] },
    { family: 'Roboto', variants: ['400', '700'] }
  ],
  name: 'fonts',
  filename: 'fonts.css',
  path: 'fonts/',
  formats: ['woff', 'woff2']
});

/* ---------------------------------- MAIN CONFIG ---------------------------------- */
module.exports = {
  entry: {
    app: './src/js/index.js',
    vendor: ['babel-polyfill', 'whatwg-fetch']
  },
  output: {
    path: OPTIONS.distPath,
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: 'html-loader',
      },
      {
          test: /\.scss/,
          use: extractSASSPlugin.extract([{
              loader: 'css-loader',
              options: {
                  minimize: !IS_DEV_MODE,
                  sourceMap: IS_DEV_MODE
              }
          }, {
              loader: 'sass-loader',
              options: {
                  sourceMap: IS_DEV_MODE
              }
          }])
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|dist)/,
        use: 'babel-loader'
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
            loader: 'webpack-remove-number-attrs-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|ico)$/,
        use: 'file-loader?name=assets/[name].[ext]&publicPath=./'
      }
    ]
  },
  plugins: [IndexPagePlugin, extractSASSPlugin, GoogleWebFontsPlugin]
};
