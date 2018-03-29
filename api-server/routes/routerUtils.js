const routerConfig = require('./routerConfig');

const renderDefaultTemplate = function (res) {
    return res.render(routerConfig.defaultRoute.templateName, routerConfig.defaultRoute.data);
};

module.exports = {renderDefaultTemplate};