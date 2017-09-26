const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    devtool: 'eval',
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      hot: true,
      proxy: {
        '/users/*': 'http://localhost:5000/'
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  }
);