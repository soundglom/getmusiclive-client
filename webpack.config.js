const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = resolve(__dirname, 'src/');
const publicPath = resolve(__dirname, 'dist/');
// const DIST_PATH = 'dist';

module.exports = {
  devtool: 'source-map',
  context: srcPath,
  entry: './index.js',
  output: {
    path: publicPath,
    filename: 'bundle.js'
  },
  devServer: {
    // host: '0.0.0.0',
    // port: 5006,
    proxy: [
      {
        context: ['/api', '/events'],
        target: 'http://localhost:5006/',
        secure: false
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
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
