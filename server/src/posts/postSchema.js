const mongoose = require('mongoose');

const modelName = 'post';

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String
    }]
});

module.exports = mongoose.model(modelName, PostSchema);