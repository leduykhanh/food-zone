var foodModel = require('../models/food');

var food = {};

// controller that handles food listings fetch request.
food.get = function (req, res) {
	
	var skip = req.query.skip;
	var limit = req.query.limit;

	var foodData = foodModel.get(skip, limit);
	foodData.then(function(data){
		var response = {};
		response.status='success';
		response.data=data;
		res.send(response);
	}, function(err){
		res.send(err);
	});

};

// controller that handles single food fetch request.
food.getOne = function (req, res) {
	
	var foodid = req.query.foodId;

	var foodData = foodModel.getOne(foodid);
	foodData.then(function(data){
		var response = {};
		response.status='success';
		response.data=data;
		res.send(response);
	}, function(err){
		res.status(400);
		res.send(err);
	});
};




module.exports = food;