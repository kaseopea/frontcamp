const path = require("path");

module.exports = {
  setupTestFrameworkScriptFile: path.resolve(__dirname, "unit-tests", "jest-init.js"),
  roots: [
    "src/app"
  ],
  moduleNameMapper: {
    "^.+\\.(html)$": path.resolve(__dirname, "unit-tests", "jest-html-transformer.js"),
    "^.+\\.(js)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": path.resolve(__dirname, "node_modules", "jest-css-modules-transform")
  }
};