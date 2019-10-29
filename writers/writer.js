const fs = require('fs');

// Puts string into file (ie travis.yml, .gitignore, webpack.config.js)
  const write = (path, str) => {
    fs.writeFileSync(path, str, 'utf8');
  };

// Puts JSON into (ie eslint, package.json, babelrc)
  const writeJson = (path, obj) => {
    write(path, JSON.stringify(obj));
  };

module.exports = {
  write, 
  writeJson,
};