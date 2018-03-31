const mongoose = require('mongoose');
const appConfig = require('../../config.json');
const messages = require('../../messages');

/* Connection */
mongoose.connect(appConfig.db.plips.connection)
  .then(() => console.log(messages.plipsServiceDbConnectSuccess))
  .catch(err => console.error(err));

/* Schema */
const PlipsModel = require('./plipSchema');

class PostService {
  constructor() {
    this.model = PlipsModel;
  }

  getAllPlips() {
    return new Promise((resolve, reject) => {
      return this.model.find({}, (err, posts) => {
        if (err) {
          return reject(err);
        }
        return resolve(posts);
      });
    });
  }

  getPlipById(plipId) {
    const id = mongoose.Types.ObjectId(plipId);
    return new Promise((resolve, reject) => {
      return this.model.find({ _id: id }, (err, post) => {
        if (err) {
          return reject(err);
        }
        return resolve(post);
      });
    });
  }

  addPlip(plipData) {
    return new Promise((resolve, reject) => this.model.create(plipData, (err, plip) => {
      if (err) {
        return reject(err);
      }
      return resolve(plip);
    }));
  }

  updatePlip(plipId) {
    return new Promise((resolve, reject) => {
      return this.model.find({ _id: plipId }, (err, plip) => {
        if (err || !plip.length) {
          return reject(err);
        }

        const document = plip[0];

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

        return resolve(plip);
      });
    });
  }

  deletePlip(plipId) {
    const id = mongoose.Types.ObjectId(plipId);
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