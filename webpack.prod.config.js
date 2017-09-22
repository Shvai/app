const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  /*devServer: {
    contentBase: './dist',
    proxy: {
      '/users/*': 'http://localhost:5000/'
    }
  },*/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new UglifyJSPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
/*module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});*/
