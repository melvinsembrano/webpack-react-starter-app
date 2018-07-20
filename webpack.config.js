const path = require('path');

module.exports = {
  entry: {
    index: ["core-js", './src/App.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev')
  },
  plugins: [
  ],
  module: {
    rules: [

      {
        test: /\.(png|svg|jpg|gif|eot|woff|woff2|ttf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx)?(\.erb)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
