const express = require('express');
const router = express.Router();
const appConfig = require('./config.json');
const pjson = require('../package.json');
const log = require('./logger');

const routerConfig = {
    methods: {
        get: 'GET',
        post: 'POST',
        put: 'PUT',
        delete: 'DELETE',
    }
};
const defaultRoute = {
    templateName: 'defaultRoute',
    data: {
        title: appConfig.appName,
        message: `Your PC is hacked by ${pjson.author}!`
    }
};


/* Route /blogs | GET/POST Methods */
router.route('/blogs').all((req, res) => {
    let message;
    switch (req.method) {
        case routerConfig.methods.get :
            message = `${routerConfig.methods.get} method | Url: $\{req.originalUrl}`;
            log().info(message);
            res.send(message);
            break;
        case routerConfig.methods.post:
            message = `${routerConfig.methods.post} method | Url: $\{req.originalUrl}`;
            log().info(message);
            res.send(message);
            break;
        default:
            message = `${req.method} method is restricted for this route  | Url: $\{req.originalUrl}`;
            log().info(message);
            renderDefaultTemplate(res);
            break;
    }
});

/* Route /blogs/{id} | GET/PUT/DELETE Methods */
router.route('/blogs/:id').all((req, res) => {
    const id = req.params.id;
    let message;
    switch (req.method) {
        case routerConfig.methods.get :
            message = `${routerConfig.methods.get} method | Id: ${id} | Url: ${req.originalUrl}`;
            log().info(message);
            res.send(message);
            break;
        case routerConfig.methods.put:
            message = `${routerConfig.methods.put} method | Id: ${id} | Url: ${req.originalUrl}`;
            log().info(message);
            res.send(message);
            break;
        case routerConfig.methods.delete:
            message = `${routerConfig.methods.delete} method | Id: ${id} | Url: ${req.originalUrl}`;
            log().info(message);
            res.send(message);
            break;
        default:
            message = `${req.method} method is restricted for this route | Url: $\{req.originalUrl}`;
            log().info(message);
            renderDefaultTemplate(res);
            break;
    }
});

/* Default routes */
router.route(['/', '*']).get((req, res) => {
    log().info(`Url: ${req.originalUrl}`);
    renderDefaultTemplate(res);
});

//
function renderDefaultTemplate(res) {
    return res.render(defaultRoute.templateName, defaultRoute.data);
}

module.exports = router;
