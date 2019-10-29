const { write } = require('./writer');

const createGitignore = path => {
  const gitignore = `
  # Dependency directories
  node_modules/
  
  # dotenv environment variables file
  .env
  `

  write(path + '/.gitignore', gitignore);
};

module.exports = createGitignore;