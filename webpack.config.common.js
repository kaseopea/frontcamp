const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
const OPTIONS = require('./options');


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
  plugins: [IndexPagePlugin, GoogleWebFontsPlugin]
};
