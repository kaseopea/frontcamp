const mongoose = require('mongoose');

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
    },
    bio: {
        type: String
    }
});

const User = mongoose.model(modelName, UserSchema);

module.exports = User;
