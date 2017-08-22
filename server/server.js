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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/users', UserController);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

/*
app.use(function (req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
*/

const port = process.env.PORT || 5000;
const server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

module.exports = app
