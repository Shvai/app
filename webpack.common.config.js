const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/static'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    proxy: {
      '/users/*': 'http://localhost:5000/'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(['dist'])
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
        include: [/(src)/, /(node_modules)/],
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  }
};