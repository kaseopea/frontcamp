const path = require('path');

const OPTIONS = {
    publicPath: path.resolve(__dirname, '../public'),
    serverBuildPath: path.resolve(__dirname, '../build'),
    cssOutputFilename: 'style.css',
    cssOutputFilenameProd: 'style.min.css'
};

module.exports = OPTIONS;