const mongoose = require('mongoose');
const appConfig = require('../../config.json');

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

const Post = mongoose.model(
  appConfig.db.posts.modelName,
  PostSchema,
  appConfig.db.posts.collectionName
);

module.exports = Post;
