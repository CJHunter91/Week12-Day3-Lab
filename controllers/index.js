var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/bucket_list', require('./bucket_list'));

// Ask Keith/ Main route.
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

module.exports = router;