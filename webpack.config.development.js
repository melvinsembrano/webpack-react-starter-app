var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'thinktank.js',
    path: path.resolve(__dirname, 'dev')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx)?(\.erb)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          // {
          //   loader: "postcss-loader" // translates CSS into CommonJS
          // },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
          ]
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         minimize: false
        //       }
        //     },
        //     'postcss-loader',
        //     'sass-loader'
        //   ]
        // })
      }
    ]
  }
};
