module.exports = function(app){
    var vaultdragon = require('../controllers/RestAPIController');

    app.get('/object', vaultdragon.findAll);
    app.get('/object/:_key', vaultdragon.findByKey);
    app.post('/object/', vaultdragon.update);
    app.post('/object/:_key', vaultdragon.delete);
	
	//Testfunction to populate data
	app.get('/import', vaultdragon.import);
}
