const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./dev/js/index.js",

  devServer: {
    static: {
      directory: path.join(__dirname, "build")
    },
    port: 9000,
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
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     use: [{
      //       loader: "css-loader"
      //     }, {
      //       loader: "sass-loader"
      //     }]
      //   })
      // },
    ]
  },

  plugins: [
    // new ExtractTextPlugin('style.css'),
    new CopyPlugin({
      patterns: [
        { from:'dev/styles/images', to:'images' }
      ]
    })
  ]
};