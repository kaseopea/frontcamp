const routerConfig = require('./routerConfig');

const renderDefaultTemplate = res =>
  res.render(routerConfig.defaultRoute.templateName, routerConfig.defaultRoute.data);

module.exports = { renderDefaultTemplate };
