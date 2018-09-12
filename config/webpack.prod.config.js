var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');

// Plugins
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var baseConfig = require('./webpack.base.config');
var nodeConfig = require('./webpack.node.config');

const prodConfiguration = function (version, platform) {
  return merge([
    {
      cache: true,
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        },
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              mangle: {
                keep_fnames: true,
              },
            },
          })
        ],
      },
      plugins: [
        new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname, '..'), verbose: true }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({ 'process.env.VERSION': JSON.stringify(version) }),
        new webpack.DefinePlugin({ 'process.env.PLATFORM': JSON.stringify(platform) }),
        new OptimizeCssAssetsPlugin(),
        // new Visualizer({ filename: './statistics.html' }
        new CopyWebpackPlugin([
          { from: 'src/assets', to: '../build' }
        ]),
        new webpack.DefinePlugin({
          VERSION: JSON.stringify("1.0.0")
        })],
      output: {
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, '..', 'build'),
        publicPath: '/',
      },
    },
  ]);
}

module.exports = function (env) {
  return merge(baseConfig, prodConfiguration(env.VERSION, env.PLATFORM))
}













