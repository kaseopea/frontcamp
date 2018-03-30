const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const modelName = 'user';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
  },
  name: {
    type: String
  }
});
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model(modelName, UserSchema);

module.exports = User;
