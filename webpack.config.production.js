var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: false
});
const uglifyJs = new webpack.optimize.UglifyJsPlugin();

module.exports = {
  entry: './src/App.js',
  output: {
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    extractSass,
    uglifyJs,
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx)?(\.erb)?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }]
        })
      }
    ]
  }
};
