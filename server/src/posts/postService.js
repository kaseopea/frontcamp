const mongoose = require('mongoose');
const appConfig = require('../../config.json');
const messages = require('../../messages');

/* Connection */
mongoose.connect(appConfig.db.posts.connection);

/* Schema */
const PostModel = require('./postSchema');

class PostService {
    constructor() {
        this.model = PostModel;
    }

    getAllPosts() {
        // return new Promise((resolve, reject) => this.model.find({}, (err, posts) => (err) ? reject(err) : resolve(posts)));
        return new Promise((resolve, reject) => {
            return this.model.find({}, (err, posts) => {
                if (err) {
                    return reject(err);
                }

                return resolve(posts);
            });
        });
    }

    getPostById(postId) {
        console.log(`Get post by id [${postId}]`);
    }

    addPost(postData) {
        return new Promise((resolve, reject) => this.model.create(postData, (err, post) => {
            if (err) {
                return reject(err);
            }
            return resolve(post);
        }));
    }

    updatePost(id, postConfig) {
        console.log(`Updating post [${id}] with config [${postConfig}]`);
    }

    deletePost(postId) {
        console.log(`Deleting post with id [${postId}]`);
    }
}

module.exports = new PostService();