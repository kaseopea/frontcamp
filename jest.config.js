const path = require("path");

module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: path.resolve(__dirname, "unit-tests", "jest.init.js"),
  roots: ["src"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/unit-tests/"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  moduleNameMapper: {
    "^.+\\.(html)$": path.resolve(__dirname, "unit-tests", "jest.html-transformer.js"),
    "^.+\\.(js)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy"
  }
};