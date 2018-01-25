const express = require('express');
const router = express.Router();
const appConfig = require('./config.json');
const pjson = require('../package.json');
const routerConfig = {
    status: {
        notFound: 404
    },
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
            message = `${routerConfig.methods.get} method`;
            console.log(message);
            res.send(message);
            break;
        case routerConfig.methods.post:
            message = `${routerConfig.methods.post} method`;
            console.log(message);
            res.send(message);
            break;
        default:
            message = `${req.method} method is restricted for this route`;
            console.log(message);
            res.sendStatus(routerConfig.status.notFound);
            break;
    }
});

/* Route /blogs/{id} | GET/PUT/DELETE Methods */
router.route('/blogs/:id').all((req, res) => {
    const id = req.params.id;
    let message;
    switch (req.method) {
        case routerConfig.methods.get :
            message = `${routerConfig.methods.get} method | Id: ${id}`;
            console.log(message);
            res.send(message);
            break;
        case routerConfig.methods.put:
            message = `${routerConfig.methods.put} method | Id: ${id}`;
            console.log(message);
            res.send(message);
            break;
        case routerConfig.methods.delete:
            message = `${routerConfig.methods.delete} method | Id: ${id}`;
            console.log(message);
            res.send(message);
            break;
        default:
            message = `${req.method} method is restricted for this route`;
            console.log(message);
            res.sendStatus(routerConfig.status.notFound);
            break;
    }
});

/* Default routes */
router.route(['/', '*']).get((req, res) => {
    res.render(defaultRoute.templateName, defaultRoute.data);
});

module.exports = router;
