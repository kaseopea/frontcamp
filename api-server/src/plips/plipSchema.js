const mongoose = require('mongoose');
const appConfig = require('../../config.json');

const PlipsSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String
  },
  author: {
    type: String
  }
});

const Plip = mongoose.model(
  appConfig.db.plips.modelName,
  PlipsSchema,
  appConfig.db.plips.collectionName
);

module.exports = Plip;
