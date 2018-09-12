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
      ]),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify("1.0.0")
      })
    ],
    output: {
      filename: '[name].[chunkhash].bundle.js',
      chunkFilename: '[name].[chunkhash].bundle.js',
      path: path.resolve(__dirname, '..', 'build'),
      // publicPath: '/'
    },
  }
]);