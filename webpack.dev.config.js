const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');


module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
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