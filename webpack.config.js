const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = resolve(__dirname, 'src/');
const DIST_PATH = 'dist';
const publicPath = resolve(__dirname, 'dist/');

module.exports = {
  devtool: 'source-map',
  context: srcPath,
  entry: './index.js',
  output: {
    path: publicPath,
    publicPath,
    filename: 'bundle.js'
  },
  devServer: {
    proxy: {
      "/api": "http://localhost:5000"
    }
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../template.html'

    })
  ]
};
