const mongoose = require('mongoose');
const appConfig = require('../../config.json');
const messages = require('../../messages');

/* Connection */
mongoose.connect(appConfig.db.posts.connection)
  .then(() => console.log(messages.postServiceDbConnectSuccess))
  .catch(err => console.error(err));

/* Schema */
const PostModel = require('./postSchema');

class PostService {
  constructor() {
    this.model = PostModel;
  }

  getAllPosts() {
    return new Promise((resolve, reject) => {
      return this.model.find({}, (err, posts) => {
        if (err) {
          return reject(err);
        }
        return resolve(posts);
      });
    });
  }

  getPostById(postId) {
    const id = mongoose.Types.ObjectId(postId);
    return new Promise((resolve, reject) => {
      return this.model.find({ _id: id }, (err, post) => {
        if (err) {
          return reject(err);
        }
        return resolve(post);
      });
    });
  }

  addPost(postData) {
    return new Promise((resolve, reject) => this.model.create(postData, (err, post) => {
      if (err) {
        return reject(err);
      }
      return resolve(post);
    }));
  }

  updatePost(id) {
    return new Promise((resolve, reject) => {
      return this.model.find({ _id: id }, (err, post) => {
        if (err || !post.length) {
          return reject(err);
        }

        const document = post[0];

        // update some information in post and save
        document.title = `${document.title} Upd!`;

        // save the user
        document.save((errSave) => {
          if (errSave) {
            return reject(errSave);
          }

          return resolve({
            status: 'ok',
            message: messages.updatePostSuccess
          });
        });

        return resolve(post);
      });
    });
  }

  deletePost(postId) {
    const id = mongoose.Types.ObjectId(postId);
    return new Promise((resolve, reject) => {
      return this.model.find({ _id: id }, (err, post) => {
        if (err || !post.length) {
          return reject(err);
        }

        post[0].remove((errData) => {
          if (errData) {
            return reject(err);
          }
          return resolve({
            status: 'ok',
            message: messages.deletePostSuccess
          });
        });
      });
    });
  }
}

module.exports = new PostService();