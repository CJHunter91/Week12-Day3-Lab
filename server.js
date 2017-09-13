// Express
var express = require('express');
var app = express();

// BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Controller
app.use(require('./controllers'));

// Accesses index.html; index.html references script (in same directory).
app.use(express.static('client/build'));

// Port listening
app.listen(3000, function(){
  console.log('App is running on port ' + this.address().port);
});