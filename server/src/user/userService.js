const mongoose = require('mongoose');
const appConfig = require('../../config.json');
const messages = require('../../messages');

/* Connection */
mongoose.connect(appConfig.db.users.connection)
    .then(() =>  console.log(messages.userServiceDbConnectSuccess))
    .catch((err) => console.error(err));

/* Schema */
const UserModel = require('./userSchema');

class UserService {
    constructor () {
        this.model = UserModel;
    }

    addUser(userData) {

    }

    deleteUser(userId) {

    }
}

module.exports = UserService;
