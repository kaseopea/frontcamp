const passport = require('passport');
const User = require('../user/userSchema');

// Restrict access to root page
const home = (req, res) => {
    res.render('index', {
        user: req.user
    });
};

// Go to registration page
const register = (req, res) => {
    res.render('register');
};

// Post registration
const doRegister = (req, res) => {
    const user = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    };
    User.register(new User(user), user.password, (err, user) => {
        if (err) {
            return res.render('register', {user});
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
const doLogin = (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }
        req.login(user, {}, (errLogin) => {
            if (errLogin) {
                return next(errLogin);
            }
            return res.redirect('/');
        });
    })(req, res, next);

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