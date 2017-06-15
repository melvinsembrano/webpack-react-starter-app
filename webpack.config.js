var path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'thinktank.js',
    path: path.resolve(__dirname, 'dist')
  }
};
