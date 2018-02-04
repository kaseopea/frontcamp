const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../user/userSchema');

const userController = {};

// Restrict access to root page
const home = (req, res) => {
    res.render('index', { user : req.user });
};

// Go to registration page
const register = (req, res) => {
    res.render('register');
};

// Post registration
const doRegister = (req, res) => {
    const newUser = new User({
        username : req.body.username,
        name: req.body.name
    });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            return res.render('register', { user});
        }
        // passport authenticate
        passport.authenticate('local')(req, res, () => res.redirect('/'));
    });
};

// Go to login page
const login = (req, res) => {
    res.render('login');
};

// Post login
const doLogin = (req, res) => {
    // passport authenticate
    passport.authenticate('local')(req, res, () => res.redirect('/'));
};

// logout
const logout = (req, res) => {
    req.logout();
    res.redirect('/');
};

module.exports = {
    home,
    register,
    doRegister,
    login,
    doLogin,
    logout
};