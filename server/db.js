const mongoose = require('mongoose');
const appConfig = require('./config.json');

/* Shemas */
const PostModel = require('./schemas/post');
const UserModel = require('./schemas/user');

mongoose.connect(appConfig.db.posts.connection);

class DB {
    constructor() {
        if (typeof DB.instance === 'object') {
            return DB.instance;
        }
        DB.instance = this;
        this.db = null;
        return this;
    }

    connectTo(dbName) {
        mongoose.connect('mongodb://localhost/'.concat(dbName));
        this.db = mongoose.connection;
    }

    init() {

    }
}

module.exports = new DB();
