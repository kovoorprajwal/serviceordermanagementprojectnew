var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/serviceordermanagement";

MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var query = { };
  db.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});/**
 Created by Mahe on 7/5/2017.
 **/
//var promise = mongoose.connect('mongodb://localhost/serviceordermanagement', {
 // useMongoClient: true,
  /* other options */
//});
// Or `createConnection`
//var promise = mongoose.createConnection('mongodb://localhost/serviceordermanagement', {
  //useMongoClient: true,
  /* other options */
//});
//promise.then(function(err,db) {if (err) throw err;
 // var query = { address: "Park Lane 38" };
 // db.collection("customers").find(query).toArray(function(err, result) {
   //    if (err) throw err;
    //  console.log(result);
     //   db.close();
  //  });
//});/**