const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const UserController = require('./controllers/user.controller');

mongoose.connect(
  'mongodb://root:76cSK39IdZDt7gPX@cluster0-shard-00-00-hanrg.mongodb.net:27017,' +
  'cluster0-shard-00-01-hanrg.mongodb.net:27017,' +
  'cluster0-shard-00-02-hanrg.mongodb.net:27017/db?' +
  'ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
);

app.use('/users', UserController);

app.use(express.static(path.join('../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join('../client/build/index.html'));
});

const port = process.env.PORT || 5000;
const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

module.exports = app;