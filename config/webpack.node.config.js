var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
// Plugins
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge([
  {
    plugins: [
      new CopyWebpackPlugin([
        { from: 'src/assets', to: '../build' }
      ])
    ],
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, '..', 'build'),
      publicPath: '/'
    },
  }
]);