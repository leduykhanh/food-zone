var locallydb = require('locallydb');

// load the database (folder) in './mydb', will be created if doesn't exist 
var db = new locallydb('./mydb');

// load the collection (file) in './mydb/monsters', will be created if doesn't exist 
var collection = db.collection('monsters');

// Insert/add/push a list of elements
collection.insert([
  {name: "sphinx", mythology: "greek", eyes: 2, sex: "f", hobbies: ["riddles","sitting","being a wonder"]},
  {name: "hydra", mythology: "greek", eyes: 18, sex: "m", hobbies: ["coiling","terrorizing","growing"]},
  {name: "huldra", mythology: "norse", eyes: 2, sex: "f", hobbies: ["luring","terrorizing"]},
  {name: "cyclops", mythology: "greek", eyes: 1, sex: "m", hobbies: ["staring","terrorizing"]},
  {name: "fenrir", mythology: "norse", eyes: 2, sex: "m", hobbies: ["growing","god-killing"]},
  {name: "medusa",  mythology: "greek", eyes: 2, sex: "f", hobbies: ["coiling","staring"]}
]);

// Insert/add/push only one element
collection.insert({name: "HamoIzm", mythology: "amazigh", eyes: 2, sex: "m", hobbies: ["riddles","hunting"]});

// retrieve elements
collection.where({name: "HamoIzm"});


// retrieve by cid (cid is not index in array, cid is related with addition)
collection.get(3);


// retrieve elements (monsters) with >= 2 eyes (an array)
collection.where("@eyes >= 2");


// retrieve elements with (2 eyes and from the greek mythology) or from the amazing mythology
collection.where("(@eyes == 2 && @mythology == 'greek') || (@mythology == 'amazing')");


// retrieve elements creation date
collection.get(6).$created;

// retrieve elements last edit date
collection.get(6).$updated;

// List all elements in the collection
collection.items;

// Update an element, it will add un-exsited key and replace existed ($created and cid can't be changed)
collection.update(5, {eyes: 3, food:"waloo"});
collection.get(5);


// Replace the element with the same cid and $created
collection.replace(6, {car: "Ferrari"});
collection.get(6);


// Delete an item by cid
collection.remove(1);

// Save all to files
collection.save();

// Now the data in the collection is
