var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');
var STATIC_DIR = path.resolve(__dirname, 'static');
var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test:/\.css$/,
        include:STATIC_DIR,
        loader:'style!css'
      }
    ]
  }
  
};

module.exports = config;
