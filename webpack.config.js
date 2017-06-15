var path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'thinktank.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
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
