var mongoose = require('mongoose'),

values=mongoose.model('values');

//Index page
exports.index = function(req, res){
res.status(404).json({message: "REST API. Refer API Documentation for the Endpoints."});
};

//Get all the values
exports.findAll = function(req, res){
  values.find({},function(err, results) {
    if (!err && results!==null) {
		   return res.send(results);
	   }
	   else{
		res.status(500).json({message: "No Data in the database"});
					} 
  });
};

//Get by key and time
exports.findByKey = function(req, res){
  var key = req.params._key;
  var ts=req.query.timestamp;
 
 if(!ts){
  values.findOne({'_key':key},{},{ sort: { 'timestamp' : -1 } },function(err, result) {
	   if (!err &&  result!==null) {
		   return res.send(result);
	   }
		   else{
		res.status(500).json({message: "Key not found"});
					} 
});}
else
{
  values.findOne({'_key':key ,'timestamp':ts},function(err, result) {
	    if (!err && result!==null) {
			 return res.send(result);
		}
		else{
		res.status(404).json({message: "Value in given timestamp or the key is not found."});
					} 
  });
}
};

//Add/Update 
exports.update = function(req, res) {
 var key = req.body._key;
 var updates = req.body;
 updates.timestamp=Math.floor((new Date()).getTime() / 1000);
  values.findOneAndUpdate({'_key':key,'timestamp':updates.timestamp},req.body,{sort: { 'timestamp' : -1 },upsert:true,setDefaultsOnInsert:true},
    function (err, updateddata) {
      if (err) {
		  res.status(500).json({message: "Could not update database. Error: " + err});  
	  }
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



