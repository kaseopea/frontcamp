const path = require("path");

module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: path.resolve(__dirname, "unit-tests", "jest.init.js"),
  roots: ["src/app"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/unit-tests/"
  ],
  moduleNameMapper: {
    "^.+\\.(html)$": path.resolve(__dirname, "unit-tests", "jest.html-transformer.js"),
    "^.+\\.(js)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": path.resolve(__dirname, "node_modules", "jest-css-modules-transform")
  }
};