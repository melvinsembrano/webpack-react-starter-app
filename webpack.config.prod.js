const path = require('path');
const webpack = require('webpack');

const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
  filename: "[name]-[hash].css",
  disable: false
});

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: true,
    flagIncludedChunks: false,
    occurrenceOrder: true,
    usedExports: true
  },
  plugins: [
    extractSass,
    new UglifyJSPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "css-loader",
              options: { minimize: true }
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

// var path = require('path');
// var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//

//
//
// var config = require('./webpack.config.development')
// config.output = {
//   filename: '[name]-[chunkhash].js',
//   path: path.resolve(__dirname, 'dist')
// };
// config.plugins = [
//   extractSass,
//   uglifyJs,
//   new HtmlWebpackPlugin(),
// ];
//
// delete config.devtool
// delete config.devServer
//
// // extract css into a different file
// config.module.rules[0].use = extractSass.extract({
//   fallback: 'style-loader',
//   use: [{
//       loader: "css-loader"
//     },
//     {
//       loader: "sass-loader"
//     }
//   ]
// });
//
// module.exports = config;
