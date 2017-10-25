const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractSass = new ExtractTextPlugin({
//   filename: "[name].[contenthash].css",
//   disable: process.env.NODE_ENV === "development"
// });

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: 'build/'
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};