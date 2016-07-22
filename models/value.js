var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var valueSchema = new Schema({
	_key : {type: String,required: true},
	val: {type: String, required: true},
	timestamp: {type: Number, required: true, default: Math.floor((new Date()).getTime() / 1000)}
});

var values = mongoose.model('values', valueSchema);

module.exports = {Values: values};