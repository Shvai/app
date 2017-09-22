const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');

const app = express();
const config = require('../webpack.common.config.js');
const compiler = webpack(config);
const UserController = require('./controllers/user.controller');
const db = require('./db');
const static_path = path.join(__dirname, './../dist');

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/users', UserController);
app.use(express.static(static_path, {maxage: 31557600}));
//app.get('*', function(req, res) {
  //res.sendFile(path.join(__dirname, './../dist/index.html'));
//});

app.listen(5000, function () {
  console.log('Server listening on port 5000!\n');
});