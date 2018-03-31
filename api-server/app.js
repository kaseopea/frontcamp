const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');

const routerDefault = require('./routes/defaultRouter');
const routerMain = require('./routes/mainRouter');
const routerBlogs = require('./routes/blogsRouter');
const routerPlips = require('./routes/plipsRouter');
const appConfig = require('./config.json');
const errorHandlingMiddleware = require('./src/errorHandlingMiddleware/errorHandling');

const app = express();

/* Setting Express View Engine (PUG by default) */
app.set('view engine', 'pug');

/* Setting alternative views directory */
app.set('views', path.join(__dirname, '/views'));

/* CORS */
app.use(cors());

/* Body Parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/* Passport */
app.use(session({
  secret: appConfig.secretKey,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

/* User */
const User = require('./src/user/userSchema');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* Add router */
app.use('/', routerMain);
app.use('/', routerBlogs);
app.use('/', routerPlips);
app.use('/', routerDefault);

/* Custon error handling middleware */
app.use(errorHandlingMiddleware);

/* uncaughtException error handling */
process.on('uncaughtException', (err) => console.log(err));

/* Server */
app.listen(appConfig.appPort, () => console.log(`${appConfig.appName} listening on port ${appConfig.appPort}!`));
