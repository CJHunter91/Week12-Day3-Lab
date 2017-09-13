// Express
var express = require('express');
var app = express();

// BodyParser


// Controller

// Accesses index.html; index.html references script (in same directory).
app.use(express.static('client/build'));

// Port
app.listen(3000, function(){
  console.log('App is running on port ' + this.address().port);
});