<<<<<<< HEAD
require('./server/server');
=======
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const UserController = require('./controllers/user.controller');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

mongoose.connect(
  'mongodb://root:76cSK39IdZDt7gPX@cluster0-shard-00-00-hanrg.mongodb.net:27017,' +
  'cluster0-shard-00-01-hanrg.mongodb.net:27017,' +
  'cluster0-shard-00-02-hanrg.mongodb.net:27017/db?' +
  'ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
);

app.use('/users', UserController);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

module.exports = app;
>>>>>>> 307af998542e2df6186704b7aad3889c95b92a9d
