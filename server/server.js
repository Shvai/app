const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

const UserController = require('./controllers/user.controller');
const db = require('./db');


// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/users', UserController);

// Serve the files on port 3000.
app.listen(5000, function () {
  console.log('Example app listening on port 5000!\n');
});