const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = resolve(__dirname, 'src/');
const DIST_PATH = 'dist';
const publicPath = resolve(__dirname, 'dist/');

module.exports = {
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Get Music Live',

    })
  ]
};
