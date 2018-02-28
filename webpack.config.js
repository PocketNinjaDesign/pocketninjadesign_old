const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",

  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9000,
    publicPath: "/build/"
  },

  output: {
    path: path.resolve(__dirname, "./build"),
    // filename: "bundle.[hash].js",
    filename: "bundle.js",
    publicPath: "/build/"
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
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
      { from:'styles/images', to:'images' },
    ]),
  ]
};