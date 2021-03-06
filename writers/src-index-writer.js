const { write } = require('./writer');

const createIndex = path => {
  const indexHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>`;

  const indexJs = `import React from 'react';
  import { render } from 'react-dom';
  import App from './components/App';
  
  render(
    <App />,
    document.getElementById('root')
    );
    `;

  write(path + '/src/index.html', indexHtml);
  write(path + '/src/index.js', indexJs);
};

module.exports = createIndex;