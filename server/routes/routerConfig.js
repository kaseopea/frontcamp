const appConfig = require('../config.json');
const pjson = require('../../package.json');

module.exports = {
    methods: {
        get: 'GET',
        post: 'POST',
        put: 'PUT',
        delete: 'DELETE',
    },
    defaultRoute: {
        templateName: 'defaultRoute',
        data: {
            title: appConfig.appName,
            message: `Your PC is hacked by ${pjson.author}!`
        }
    }
};