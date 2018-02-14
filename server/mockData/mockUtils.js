const postsDataMock = require('./postDataMock');

function getRandomPostData() {
    return postsDataMock[Math.floor(Math.random() * postsDataMock.length)];
}

module.exports = {getRandomPostData};