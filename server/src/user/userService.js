const mongoose = require('mongoose');
const appConfig = require('../../config.json');

/* Schema */
const UserModel = require('./userSchema');

class UserService {
    constructor () {
        this.model = UserModel;
    }

    addUser(userConfig) {

    }

    deleteUser(userId) {

    }
}

module.exports = UserService;