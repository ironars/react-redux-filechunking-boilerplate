var path = require('path');
const merge = require("webpack-merge");

//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var APP_DIR = path.resolve(__dirname, '../src');

module.exports = merge([
  {
    entry: ['@babel/polyfill', APP_DIR],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new WebpackMd5Hash()
    ],
    resolve: {
      extensions: ['.js', '.scss'],
      modules: [APP_DIR, 'node_modules'],
      descriptionFiles: ["package.json"],
      alias: {
        actions: path.resolve(APP_DIR, 'actions'),
        api: path.resolve(APP_DIR, 'api'),
        components: path.resolve(APP_DIR, 'components'),
        reducers: path.resolve(APP_DIR, 'reducers'),
      },
    },
  },
]);