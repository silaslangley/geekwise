(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.factory('CartService', function($http) {

		// Private items variable
		var items = [];

		// Angular factories return service objects
		return {

			getItems: function() {
				return items;
				// Returns items array
			},

			addItem: function(item) {
				angular.forEach(items, function(product) {
					if (item.id === product){
						updateItem(product);
						return;
					};
			
				});

				item.quantity = 1;
				items.push(product);
				// Checks if item already exists
				// If it exists, updates the quantity
				// If it doesn't exist, adds quantity property with value of 1 then
				// pushes the item onto the items array

			},

			updateItem: function(item) {
				angular.forEach(items, function(thing){


					thing.quantity += 1;

				});
				// Updates the quantity of an item

			},

			removeItem: function(item_id) {
				angular.forEach(items, function(item, index){
					if (item_id === item.id){
						items.splice(items[index]);
					}
					
				});
				// Removes an item from the items array
				// Can use angular.forEach(array, function(item, index) to splice

			},

			emptyCart: function() {
				items = [];
				// Sets items array to empty array

			},

			getItemCount: function() {
				var total = 0;
				return angular.forEach(items, function(item){
					total += item.quantity;
				});
				return total;
				
				// returns number of items, including item quantity

			},

			getCartSubtotal: function() {
				var total = 0;
				return angular.forEach(items, function(item){
					total += item.isSpecial ? item.specialPrice: item.price;
				});
				return total;
				// Return the item quantity times item price for each item in the array
			},

			getCartTotal: function(item) {
				var total = cartSubTotal() + 3;
				return total;// Return the cartSubtotal plus shipping and handling
			}
		};

	});

})(window.angular);