module.exports = function(app){
	
	app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
    var vaultdragon = require('../controllers/RestAPIController');
    app.get('/', vaultdragon.index);
    app.get('/object', vaultdragon.findAll);
    app.get('/object/:_key', vaultdragon.findByKey);
    app.post('/object/', vaultdragon.update);
    app.post('/object/:_key', vaultdragon.delete);
}
