const merge = require('webpack-merge');
const webpack = require('webpack');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
      //minimize: true,
      //compress: {
       // warnings: false
      //}
    //}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
