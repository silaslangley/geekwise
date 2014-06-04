// Require mongoose dependency
var mongoose = require('mongoose');
 
// Grab a reference to the Schema
var Schema = mongoose.Schema;
 
// Create a new product schema
var productSchema = new Schema({
	guid: String, // passing in the properties of the database object -- put in the key properties here -- if we don't then we query the database using mongoose ORM won't be able to query on the fields not listed on this schema
	title: String,
	isFeatured: Boolean,
	isSpecial: Boolean
});
 
// Register the Product model and schema with mongoose
mongoose.model('Product', productSchema); // mongoose matches the schema to the database object