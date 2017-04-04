
var food = require('../controllers/food');
var email = require('../controllers/email');
var helpers = require('../helpers/helperFunctions');

var routesAPI = function(app){

	//food routes
	app.get('/food', food.get);
	app.get('/food-item', food.getOne);

	//email route
	app.post('/email', email);
}


module.exports = routesAPI;