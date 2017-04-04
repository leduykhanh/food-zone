var food = require('../models/food');

var helpers = {};



//Function to populate data in DB if DB is empty.
helpers.populateDb = function(){
	var promise1 = food.get();
	promise1.then(function(data){
		
		if(data.length){
			console.log('food table already populated.');
		}
		else{
			console.log('Populating food table.');
			food.seed();	
		}
	});
}

module.exports = helpers;
