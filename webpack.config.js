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
    filename: 'bundle.js'
  },
  devServer: {  
    proxy: [
      {
        context: ['/api', '/events'],
        target: "http://localhost:5000",
        secure: false
      }
    ]
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
