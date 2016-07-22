var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');


var mongoUri = 'mongodb://admin:test123#@ds021915.mlab.com:21915/vaultdragon';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
});


require('./models/value');
require('./routes/routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');
