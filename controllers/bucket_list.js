var express = require('express');
var bucketRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;

// Connect to mongodb.
MongoClient.connect('mongodb://localhost:27017/bucket_list', function(err, database){
  if (err) return;
  db = database;
});

// Index
bucketRouter.get('/', function(req, res){
  db.collection('countries').find().toArray(function(err, results){
  if (err) return;
  console.log(results);
  res.json(results);
  });
})

// Create
bucketRouter.post('/', function(req, res){
  db.collection('countries').insert(req.body, function(err, response){
    if (err) return;
    res.json(response);
  });
})

module.exports = bucketRouter;