const express = require('express');
const plipsService = require('../src/plips/plipService');
const messages = require('../messages');
const routerConfig = require('./routerConfig');
const routerUtils = require('./routerUtils');
const log = require('../logger');

const router = express.Router();

/* Route /blogs | GET/POST Methods */
router.route('/plips').all((req, res, next) => {
  let message;
  switch (req.method) {
    case routerConfig.methods.get :
      message = `${routerConfig.methods.get} method | Url: ${req.originalUrl}`;
      log().info(message);

      plipsService.getAllPlips()
        .then((data) => {
          // logging successfully created user
          log().info(`Returned ${data.length} posts`);
          res.send(data);
        })
        .catch((err) => {
          // logging error creating user
          log().error(messages.getAllPostsError);
          next(err);
        });
      break;
    case routerConfig.methods.post:
      plipsService.addPlip(req.body)
        .then((data) => {
          // logging successfully created user
          log().info(`${data.message} ${routerConfig.methods.post} method | Url: ${req.originalUrl}`);
          res.send(data);
        })
        .catch((err) => {
          // logging error creating user
          log().error(messages.addPostErrorMessage);
          next(err);
        });
      break;
    default:
      message = `${req.method} method is restricted for this route  | Url: ${req.originalUrl}`;
      log().info(message);
      routerUtils.renderDefaultTemplate(res);
      break;
  }
});

/* Route /blogs/{id} | GET/PUT/DELETE Methods */
router.route('/plips/:id').all((req, res, next) => {
  let message;
  switch (req.method) {
    case routerConfig.methods.get :
      // get post with specific id
      plipsService.getPlipById(req.params.id)
        .then((data) => {
          const doc = data[0];
          // log that we've got a document by id
          log().info(`[${doc.toObject().title}] was requested | ${routerConfig.methods.post} | Url: ${req.originalUrl}`);
          res.send(doc);
        })
        .catch((err) => {
          // logging error creating user
          log().error(messages.getPostErrorMessage);
          next(err);
        });

      break;
    case routerConfig.methods.put:
      plipsService.updatePlip(req.params.id)
        .then((data) => {
          // log that we've got a document by id
          log().info(`[${data.message}] | ${routerConfig.methods.put} | Url: ${req.originalUrl}`);
          res.send(data);
        })
        .catch((err) => {
          // logging error creating user
          log().error(messages.updatePostError);
          next(err);
        });

      break;
    case routerConfig.methods.delete:
      // delete document with specific id
      plipsService.deletePlip(req.params.id)
        .then((data) => {
          // log that we've got a document by id
          log().info(`[${data.message}] | ${routerConfig.methods.delete} | Url: ${req.originalUrl}`);
          res.send(data);
        })
        .catch((err) => {
          // logging error creating user
          log().error(messages.deletePostError);
          next(err);
        });
      break;
    default:
      message = `${req.method} method is restricted for this route | Url: $\{req.originalUrl}`;
      log().info(message);
      routerUtils.renderDefaultTemplate(res);
      break;
  }
});


module.exports = router;
