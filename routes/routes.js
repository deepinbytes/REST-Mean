module.exports = function(app){
    var vaultdragon = require('../controllers/RestAPIController');
    app.get('/', vaultdragon.index);
    app.get('/object', vaultdragon.findAll);
    app.get('/object/:_key', vaultdragon.findByKey);
    app.post('/object/', vaultdragon.update);
    app.post('/object/:_key', vaultdragon.delete);
}
