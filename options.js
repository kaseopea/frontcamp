const path = require('path');

const OPTIONS = {
    distPath: path.resolve(__dirname, 'dist'),
    cssOutputFilename: 'style.css',
    cssOutputFilenameProd: 'style.min.css'
};

module.exports = OPTIONS;