const express = require('express');
const app = express();
const path = require('path');
const UserController = require('./controllers/user.controller');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/users', UserController);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../client/build/index.html'));
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