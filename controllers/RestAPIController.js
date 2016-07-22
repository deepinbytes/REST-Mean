var mongoose = require('mongoose'),

values=mongoose.model('values');

exports.findAll = function(req, res){
  values.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findByKey = function(req, res){
  var key = req.params._key;
  var ts=req.query.timestamp;
 
 if(!ts){
  values.findOne({'_key':key},{},{ sort: { 'timestamp' : -1 } },function(err, result) {
    return res.send(result);
});}
else
{
  values.findOne({'_key':key ,'timestamp':ts},function(err, result) {
    return res.send(result);
  });
}
};

exports.update = function(req, res) {
 var key = req.body._key;
  var updates = req.body;
updates.timestamp=Math.floor((new Date()).getTime() / 1000);


  values.findOneAndUpdate({'_key':key,'timestamp':updates.timestamp},req.body,{sort: { 'timestamp' : -1 },upsert:true,setDefaultsOnInsert:true},
    function (err, updateddata) {
      if (err) return console.log(err);
      console.log(updateddata);
      return res.send(202);
  });
}

exports.delete = function(req, res){
  var key = req.params._key;
  values.remove({'_key':key},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){

    values.create(
    { "_key": "A", "val": "Erudite"},
    { "_key": "B","val": "Idempotent"},
    { "_key": "C", "val": "Tensor"},
    { "_key": "D", "val": "IOT"}
  , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};