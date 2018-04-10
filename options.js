const path = require('path');

const OPTIONS = {
    distPath: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'public'),
    cssOutputFilename: 'style.css',
    cssOutputFilenameProd: 'style.min.css'
};

module.exports = OPTIONS;