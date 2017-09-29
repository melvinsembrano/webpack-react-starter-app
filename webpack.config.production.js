var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: false
});

const uglifyJs = new webpack.optimize.UglifyJsPlugin();

var config = require('./webpack.config.development')
config.output = {
  filename: '[name]-[chunkhash].js',
  path: path.resolve(__dirname, 'dist')
};
config.plugins = [
  extractSass,
  uglifyJs,
  new HtmlWebpackPlugin(),
];

delete config.devtool
delete config.devServer

// extract css into a different file
config.module.rules[0].use = extractSass.extract({
  fallback: 'style-loader',
  use: [{
      loader: "css-loader"
    },
    {
      loader: "sass-loader"
    }
  ]
});

module.exports = config;
