const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  }
);