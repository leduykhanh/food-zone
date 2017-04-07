var q = require('q');
var locallydb = require('locallydb');

// load the database (folder) in './mydb', will be created if doesn't exist 
var db = new locallydb('./mydb');

// load the collection (file) in './mydb/food', will be created if doesn't exist 
var collection = db.collection('food');
//Initlizing interface object of this model.
var foodModel = {};

//Function to seed food data.
foodModel.seed = function(){

	collection.insert([
		{category:"main", name:"Bacon and Mushroom Fusilli Lunghi with Lemony Ricotta", desciption:"",
		details:["Cook the pasta in a large pan of salted boiling water according to packet instructions. Meanwhile, fry the onion in a large frying pan over a medium heat in a swig of olive oil until soft and golden. Increase the heat and add the chopped bacon and continue cooking for 2 mins.",
		"Add the sliced mushrooms and cook over the high heat until soft and lightly golden. Add the crushed garlic and cook for a few seconds (Take care not to burn). Add the Lemon Zest, Sun-dried Tomato Purée and remaining white wine. Continue to cook until wine reduced by half.",
		"Combine the Ricotta, 2 Tbs of parmesan and the Lemon Juice. Drain the pasta reserving a cup of the pasta water. Combine the pasta with the Mushroom Bacon Mixture and add a little of the cooking water to loosen the mix. Toss to combine. Season to taste (Bacon is salty so I found adding salt unnecessary).",
		"Serve the pasta with a grating of Parmesan, generously scattered torn basil leaves and a good dollop of the Lemony Ricotta. This is quite a quick process once the cooking begins so you will need to prepare, chop and measure all ingredients to begin with. It should really serve 6 (normal people) but in my family it would feed 4 super hungry adults!"],
		image:"bacon-and-mushroom-fusilli-lunghi-with-lemony-ricotta.jpg"},
		{category:"main", name:"Sun-Dried Tomato and Arugula Pizza", desciption:"",
		details:["The secret to this crispy pizza: giving the dough lots of time to rise so it's pliant enough to stretch very thin."],
		image: "food-detailSun-Dried.jpg"},
		{category:"main", name:"Moist Cheddar-Garlic Oven Fried", desciption:"",
		details:["This is for serious garlic lovers. The chicken bakes out so moist and tender! Grated cheese may be sprinkled on top of the breast the last 5 minutes of cooking if desired but that is optional. Double all ingredients for more than four breasts and adjust the amount of garlic to suit taste.",
		"For the coating amount you might be able to get away with 5 or maybe 6 very small chicken breasts, but I would suggest to increase the amount slightly --- to take this dish to yet another level, about 10 minutes before the cooking time is finished, drizzle the top of the chicken with a little pasta sauce, then sprinkle mozzarella cheese on top. Return to oven for about 10 minutes until the chicken is completely cooked and sauce is hot and cheese has melted.",
		"For a lemon-garlic flavor add in 3 tablespoons lemon juice to the melted butter/garlic mixture --- *NOTE* for a healthier alternative Smart Balance Butter Blend may be used in place of the melted butter --- you will love this chicken! Visit my food blog, www.kittencalskitchen.com, for more of my recipes."],
		image: "Mois-Cheddar.jpg"},
		{category:"main", name:"Meat Pie", desciption:"",
		details:["This is The Australian Traditional Meat pie! usually eaten for lunch for just watching the aussie rules footy. You can make 1 big meat pie or more little ones from this recipe!"],
		image: "Australian-Meat-Pie.jpg"},
		{category:"main", name:"Coleslaw", desciption:"",
		details:["cabbage, shredded 1 onion, finely sliced, 1 carrot, shredded, 1⁄3 cup milk, 1⁄2 cup mayonnaise, 1⁄4 cup sugar, 2 tablespoons vinegar, 2 tablespoons lemon juice, salt, pepper",
		"Mix the remaining ingredients into a sauce and pour over the veggies. Mix thoroughly and refrigerate for at least 2 hours."],
		image: "Australian- Coleslaw.jpg"},
		{category:"desert", name:"Brownie Ice Cream Cake", desciption:"Make a delicious fudgy and frosty ice cream cake. It's easy to make and a fraction of the cost of frozen desserts you buy in stores.",
		details:["Heat oven to 350°F. Line 2 (9-inch) round cake pans with foil; grease bottoms only with shortening or cooking spray.",
		"Make brownie batter directed on box. Divide batter evenly between pans. Bake 19 to 22 minutes or until toothpick inserted 2 inches from side of pan comes out almost clean. Cool completely in pans, about 1 hour. Do not remove from pans.",
		"Spread slightly softened ice cream evenly on brownies in pans. Freeze at least 2 hours or until ice cream is firm.",
		"Remove desserts from pans; remove foil. Place on serving plates. Cut each dessert into 8 wedges. Drizzle each wedge with hot fudge topping. Decorate with candy sprinkles and cherries. Store covered in freezer."],
		image: "ic-1.jpg"},
		{category:"desert", name:"Brownie Ice Cream Cake", desciption:"Enjoy this mouth-watering cheesecake made with marshmallow creme and chocolate topping – perfect for a lavish dessert!",
		details:["Heat oven to 425°F. Spray 10-inch springform pan with cooking spray.",
		"In small bowl, mix all crust ingredients. Remove 1/2 cup mixture for topping; set aside. Press remaining mixture evenly into bottom of pan. Bake 5 minutes or until crust is just turning deep golden around edge.",
		"In large bowl, beat cream cheese with electric mixer on medium speed, stopping to scrape side occasionally, until smooth. Add brown sugar, marshmallow creme and vanilla, and beat until smooth. Add eggs, 1 at a time, beating 1 minute after each addition. Use rubber spatula to stir in cinnamon. Sprinkle 1 cup chocolate chips over crust. Pour batter over chips.",
		"Bake cheesecake 15 minutes; reduce oven temperature to 225°F. Bake 55 minutes longer or until cheesecake is set around edge and center is almost set but just slightly wiggly. (Do not insert knife to test doneness because hole could cause cheesecake to crack.) Turn off oven, open oven door slightly and allow cheesecake to cool to room temperature. Remove from oven, cover loosely with foil and refrigerate at least 3 hours.",
		"In 1-quart saucepan, heat 1 cup chocolate chips and the whipping cream over low heat, stirring occasionally, until chocolate chips are melted. Spread over cheesecake and sprinkle with reserved 1/2 cup crumbs.",
		"Cover with foil and refrigerate cheesecake 1 hour or up to 48 hours. Run metal spatula along side of cheesecake to loosen and remove side of pan before serving. Store any leftovers covered in refrigerator."],
		image: "SMores-Cheesecake.jpg"},
		{category:"desert", name:"No-Bake Peanut Butter Cheesecakes", desciption:"Peanut butter lovers rejoice! These easy no-bake cheesecakes are quick to make, and guaranteed to please.",
		details:["In medium bowl, mix crushed crackers, coconut oil and brown sugar. Divide mixture among 6 (6 oz) ramekins, pressing mixture in bottom and partly up sides using a small glass (a shot glass is perfect for this).",
		"In large bowl, beat cream cheese with electric mixer on high speed until light and creamy. Beat in peanut butter and condensed milk until combined. Pipe or spoon mixture into crust-lined ramekins. Cover ramekins with plastic wrap; refrigerate about 2 hours to set. Serve with remaining ingredients."],
		image: "No-Bake-Peanut-Butter-Cheesecakes.jpg"},
		{category:"desert", name:"Chocolate and Berries Yogurt Dessert", desciption:"Dive into a frosty layered dessert with fudgy cookies, whipped fluffy yogurt, hot fudge sauce and fresh berries.",
		details:["Heat oven to 350°F. In large bowl, stir cookie mix, oil, water and egg until soft dough forms.",
		"On greased cookie sheet, drop dough by tablespoonfuls to make 6 cookies. Bake 8 to 11 minutes or until set. Cool 2 minutes, remove from cookie sheet to cooling rack.",
		"Meanwhile, press remaining dough in bottom and 1 inch up sides of springform pan. Bake 8 to 10 minutes or until set. Cool completely, about 30 minutes.",
		"In medium bowl, fold 1/2 cup raspberries into yogurt; spread evenly over crust. Crumble cookies; sprinkle over yogurt mixture. Carefully spread whipped cream evenly over cookie crumbs. Freeze 4 to 5 hours or until firm. Remove sides of pan.",
		"Drizzle 1 tablespoon fudge topping over dessert. Top with blueberries and remaining raspberries. Drizzle with remaining fudge topping. Store in freezer."],
		image: "Chocolate-and-Berries-Yogurt-Dessert.jpg"},
		{category:"desert", name:"Merry Berry Cobbler", desciption:"Make merry with a triple berry warm and cozy cobbler.",
		details:["Heat oven to 400°F. Grease 2-quart casserole with shortening. In 4-quart Dutch oven, mix granulated sugar and cornstarch. Add berries and lemon juice; toss until evenly coated. Heat to boiling. Boil 3 to 5 minutes (7 to 10 minutes for frozen berries), stirring constantly, until slightly thickened. Spoon into casserole.",
		"In large bowl, mix flour, brown sugar, baking powder, salt and nutmeg. Cut in butter, using pastry blender or crisscrossing 2 knives, until mixture looks like coarse crumbs. Stir in enough hot water until mixture forms a soft dough. Drop dough by tablespoonfuls onto berry mixture.",
		"Bake cobbler 25 to 30 minutes or until topping is golden brown. Serve warm with whipped cream."],
		image: "Merry-Berry-Cobbler.jpg"},
		{category:"starter", name:"Jicama and watermelon salad", desciption:"",
		details:["2 heads butter lettuce",
		"2 oranges, peeled, segmented 1 piece jicama, peeled, cut into matchstick-sized pieces 1 wedge red seedless watermelon, peeled, cut into batons 12 nicoise olives, pitted, halved",
		"2 tsps crumbled feta cheese 25g dried cranberries 25ml citrus-cumin vinaigrette 25g toasted sunflower seeds Small handful edible flowers"],
		image: "Jicam-and-watermelon-salad.jpg"},
		{category:"starter", name:"Lemon Coriander Rasam Recipe", desciption:"",
		details:["this recipe of lemon coriander rasam is really good for cold and coughs.",
		"its warming, comforting and nourishing if you have a really bad cold."],
		image: "lemon-coriander-rasam.jpg"},
		{category:"starter", name:"finest* parsnip, pear and Wensleydale blue soup", desciption:"",
		details:["Heat the butter in a large pan and add the parsnip cubes. Toss the parsnip cubes in the butter for 2 minutes. Add the stock, bring up to the boil and simmer for 10 minutes. Add the chopped pears, season with freshly ground black pepper and cook gently for 20 minutes more.",
		"Heat the butter in a large pan and add the parsnip cubes. Toss the parsnip cubes in the butter for 2 minutes. Add the stock, bring up to the boil and simmer for 10 minutes. Add the chopped pears, season with freshly ground black pepper and cook gently for 20 minutes more."],
		image: "parsnip-pear-and-wensleydale-blue-soup.jpg"},
		{category:"starter", name:"Savoy, chorizo & borlotti bean broth", desciption:"",
		details:["Meanwhile, heat a dry, saucepan over a medium heat. Add the chorizo and cook for 3-4 minutes, until crisp. Remove and set aside. Pour out the chorizo oil, then add the onion, garlic, olive oil and season. Cook for 8 minutes, until softened. Pour in the stock and bring to the boil, then simmer for 5 minutes.",
		"Add the chorizo, beans and cabbage, and cook for a further 3-4 minutes. Drain the cooked rice and add to the saucepan with the other ingredients. Serve with some crusty bread, if you like."],
		image: "savoy-chorizo-borlotti-bean-broth.jpg"},
		{category:"starter", name:"Chilli bean soup with cheesy garlic bread", desciption:"",
		details:["Heat the oil in a large pan over a medium-high heat and cook the onion for 5 minutes until softened. Stir in the garlic, tomato purée and spices and cook for 1 minute, then add the chopped tomatoes and stock. Bring to the boil, cover and simmer for 10 minutes. Remove from the heat, allow to cool slightly then whizz in a blender, and return to the pan.",
		"Add the beans and red pepper, bring back to the boil and cook for 10 minutes. Season to taste and add extra stock or water if you prefer a thinner consistency.",
		"Meanwhile, grill one side of the baguette slices. In a bowl, combine the butter, garlic and cheese and spoon onto the untoasted sides of the bread. Grill for a few minutes until golden and bubbling. Divide the soup between 6 bowls or cups and scatter over the coriander. Serve with the cheesy garlic bread."],
		image: "chilli-bean-soup-with-cheesy-garlic-bread.jpg"},
		]);
}


foodModel.get = function(skip, limit){
	var results = q.defer();

	skip = parseInt(skip) || 0;
	limit = parseInt(limit) || 10;


		
	results.resolve(collection.items);
	

	return results.promise;
	
}


foodModel.getOne = function(id){
	var results = q.defer();

	if(!id){
		results.reject({status:'error', error:'food Id not supplied.'});
	}
	results.resolve(collection.get(parseInt(id)));

	return results.promise;
	
}



module.exports = foodModel;