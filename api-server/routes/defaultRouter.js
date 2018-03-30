const express = require('express');
const routerConfig = require('./routerConfig');
const routerUtils = require('./routerUtils');
const log = require('../logger');

const router = express.Router();

/* Mock for error route */
router.route('/error').all((req, res, next) => {
  if (req.method === routerConfig.methods.get) {
    next(Error('Requested a route with error'));
  }
});

/* Default routes */
router.route(['/', '*']).get((req, res) => {
  log().info(`Url: ${req.originalUrl}`);
  routerUtils.renderDefaultTemplate(res);
});

module.exports = router;
