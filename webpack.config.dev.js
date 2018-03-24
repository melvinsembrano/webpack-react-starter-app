var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge')
const common = require('./webpack.config.js')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: false
});

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    extractSass,
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html'
    })
  ],

  devtool: "inline-source-map",

  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dev'),
    publicPath: '/'
  },

  module: {
    rules: [
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
            }
          ]
        })
      }
    ]
  }
})
