module.exports = function(app) {
 
	// Require mongoose dependency
	var mongoose = require('mongoose');
 
 	var passport = require('passport');
	/* ======================= server routes ====================== */
	// handle things like api calls
	// authentication routes
 
	// products api route
	app.get('/api/product/:productId', function(req, res) {   // accesses that url then calls this function
		// use mongoose to get a product in the database by guid
		mongoose.model('Product').findOne({guid: req.params.productId}, function(err, product) { //find the guid that matches what's passed into the url (productId)
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);
 
			res.send(product); // return all nerds in JSON format
		});
	});

	// products api route
	app.get('/api/products', function(req, res) {


		/* var params ={
	
		};
		/* checks for queried string of feature on the url */
		/*if(req.body.featured != undefined){
			params.isFeatured = req.body.featured;
		} 

		find(params */
		
		// use mongoose to get all products in the database
		mongoose.model('Product').find(function(err, products) {
 
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);
 
			res.send(products); // return all nerds in JSON format
		});
	});

	// featured products route

	app.get('/api/products/featured', function(req, res) {


		mongoose.model('Product').find({isFeatured: true}, function(err, products) {
			if (err)
				res.send(err);
		
			res.send(products);
			 
		});
        	
	});
 
	// route to handle creating (app.post)
	// route to handle delete (app.delete)
 
 // logout API route
	app.get('/api/logout', function(req, res, next) {
		req.logout();
		res.send(200);
	});
 
	// login API route
	app.post('/api/login', passport.authenticate('local'), function(req, res) {
		res.cookie('user', JSON.stringify(req.user));
		res.send(req.user);
	});
 
	// signup API route
	app.post('/api/signup', function(req, res, next) {
		var User = mongoose.model('User');
		var user = new User({
			email: req.body.email,
			password: req.body.password
		});
		user.save(function(err) {
			if (err) return next(err);
			res.send(200);
		});
	});

	/* ========================= frontend routes ======================= */
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load our public/index.html file
	});
 
};