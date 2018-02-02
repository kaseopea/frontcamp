const mongoose = require('mongoose');
const appConfig = require('../../config.json');

/* Connection */
mongoose.connect(appConfig.db.posts.connection);

/* Schema */
const PostModel = require('./postSchema');

class PostService {
    constructor() {
        this.model = PostModel;
    }

    getAllPosts() {
        return 'getting all posts';
    }

    getPostById(postId) {
        return `Get post by id [${postId}]`;
    }

    addPost(postConfig) {
        this.model.create(postConfig, (err) => {
            if (err) return handleError(err);
        });

        return `Adding post with config [${postConfig}]`;
    }

    updatePost(id, postConfig) {
        return `Updating post [${id}] with config [${postConfig}]`;
    }

    deletePost(postId) {
        return `Deleting post with id [${postId}]`;
    }
}

module.exports = new PostService();