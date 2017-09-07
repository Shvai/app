const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.dev.config.js');
const compiler = webpack(config);
const UserController = require('./controllers/user.controller');
const db = require('./db');

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/users', UserController);
app.use(express.static(path.join(__dirname+'../dist/static')));

app.listen(5000, function () {
  console.log('Server listening on port 5000!\n');
});