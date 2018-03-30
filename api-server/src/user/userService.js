const mongoose = require('mongoose');
const appConfig = require('../../config.json');
const messages = require('../../messages');

/* Connection */
mongoose.connect(appConfig.db.users.connection)
  .then(() => console.log(messages.userServiceDbConnectSuccess))
  .catch(err => console.error(err));

/* Schema */
const UserModel = require('./userSchema');

class UserService {
  constructor() {
    this.model = UserModel;
  }

  addUser(userData) {
    console.log(`Adding user with user data: ${userData}`);
  }

  deleteUser(userId) {
    console.warn(`Deleting user with user id: ${userId}`);
  }
}

module.exports = UserService;
