const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://root:76cSK39IdZDt7gPX@cluster0-shard-00-00-hanrg.mongodb.net:27017,' +
  'cluster0-shard-00-01-hanrg.mongodb.net:27017,' +
  'cluster0-shard-00-02-hanrg.mongodb.net:27017/db?' +
  'ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
);

module.exports = mongoose;