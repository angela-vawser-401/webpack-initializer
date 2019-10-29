const { writeJson } = require('./writer');

const createPackageJson = path => {
  const packageJson = {
      "name": "in-class-demo",
      "version": "1.0.0",
      "description": "",
      "main": "prom.js",
      "scripts": {
        "test": "jest",
        "test:watch": "npm test -- --watch",
        "build": "webpack -p --devtool source-map",
        "start": "webpack-dev-server --hot --mode development --devtool eval-source-map"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {},
      "dependencies": {}
  }
  writeJson(path + './package.json', packageJson);
};

module.exports = createPackageJson;