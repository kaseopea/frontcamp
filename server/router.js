const express = require('express');
const router = express.Router();
const appConfig = require('./config.json');
const pjson = require('../package.json');
const log = require('./logger');
const postService = require('./src/posts/postService');
const mockUtils = require('./mockData/mockUtils');
const messages = ('./messages');

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

// UTILS
function renderDefaultTemplate(res) {
    return res.render(defaultRoute.templateName, defaultRoute.data);
}

/* Route /blogs | GET/POST Methods */
router.route('/blogs').all((req, res, next) => {
    let message;
    switch (req.method) {
        case routerConfig.methods.get :
            message = `${routerConfig.methods.get} method | Url: ${req.originalUrl}`;
            log().info(message);

            postService.getAllPosts()
                .then((data) => {
                    // logging successfully created user
                    log().info(`Returned ${data.length} posts`);
                    res.send(data);
                })
                .catch(err => {
                    // logging error creating user
                    log().error(messages.getAllPostsError);
                    next(err);
                });
            break;
        case routerConfig.methods.post:
            const randomPost = mockUtils.getRandomPostData();

            // add random mock post with postService
            postService.addPost(randomPost)
                .then((data) => {
                    // logging successfully created user
                    log().info(`${data.message} ${routerConfig.methods.post} method | Url: ${req.originalUrl}`);
                    res.send(data);
                })
                .catch(err => {
                    // logging error creating user
                    log().error(messages.addPostErrorMessage);
                    next(err);
                });
            break;
        default:
            message = `${req.method} method is restricted for this route  | Url: ${req.originalUrl}`;
            log().info(message);
            renderDefaultTemplate(res);
            break;
    }
});

/* Route /blogs/{id} | GET/PUT/DELETE Methods */
router.route('/blogs/:id').all((req, res, next) => {
    let message;
    switch (req.method) {
        case routerConfig.methods.get :
            // get post with specific id
            postService.getPostById(req.params.id)
                .then((data) => {
                    const doc = data[0];
                    // log that we've got a document by id
                    log().info(`[${doc.toObject().title}] was requested | ${routerConfig.methods.post} | Url: ${req.originalUrl}`);
                    res.send(doc);
                })
                .catch(err => {
                    // logging error creating user
                    log().error(messages.getPostErrorMessage);
                    next(err);
                });

            break;
        case routerConfig.methods.put:
            postService.updatePost(req.params.id)
                .then((data) => {
                    // log that we've got a document by id
                    log().info(`[${data.message}] | ${routerConfig.methods.put} | Url: ${req.originalUrl}`);
                    res.send(data);
                })
                .catch(err => {
                    // logging error creating user
                    log().error(messages.updatePostError);
                    next(err);
                });

            break;
        case routerConfig.methods.delete:
            // delete document with specific id
            postService.deletePost(req.params.id)
                .then((data) => {
                    // log that we've got a document by id
                    log().info(`[${data.message}] | ${routerConfig.methods.delete} | Url: ${req.originalUrl}`);
                    res.send(data);
                })
                .catch(err => {
                    // logging error creating user
                    log().error(messages.deletePostError);
                    next(err);
                });
            break;
        default:
            message = `${req.method} method is restricted for this route | Url: $\{req.originalUrl}`;
            log().info(message);
            renderDefaultTemplate(res);
            break;
    }
});

/* Mock for error route */
router.route('/error').all((req, res, next) => {
    if (req.method === routerConfig.methods.get) {
        next(Error(`Requested a route with error`));
    }
});

/* Default routes */
router.route(['/', '*']).get((req, res) => {
    log().info(`Url: ${req.originalUrl}`);
    renderDefaultTemplate(res);
});

module.exports = router;
