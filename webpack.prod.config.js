const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.config.js');
module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
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
      //inject: 'body'
    }),
    new CleanWebpackPlugin(['dist']),
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
        test: /\.jsx?$/,
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
