/* (function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.factory('CartService', function() {

		// Private items variable
		var items = {};

		if(!items[item.guid]) {
		    item.quantity = 1;
		    items[item.guid] = item;
		}

		// Angular factories return service objects
		return {

			getItems: function() {
				return items;
				// Returns items array
			},

			addItem: function(item) {
				console.log(item);
				console.log(item.id);

				angular.forEach(items, function(product) {
					if (items=[]){
						item.quantity = 0;
					}
					console.log(item.quantity);
					if (product === item){
						console.log(item);
						updateItem(item);
						console.log(item.quantity);
						return;
					};
			
				});

				console.log(item);
				item.quantity = 1;
				items.push(item);
				console.log(items[0]);
				// Checks if item already exists
				// If it exists, updates the quantity
				// If it doesn't exist, adds quantity property with value of 1 then
				// pushes the item onto the items array

			},

			updateItem: function(item) {
				console.log(item);
				angular.forEach(items, function(item){
					console.log(item);

					item.quantity += 1;

				});
				// Updates the quantity of an item

			},

			removeItem: function(item_id) {
				angular.forEach(items, function(item, index){
					if (item_id === item.id){
						items.splice(items[index], 1);
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
				var total = cartSubtotal() + 3;
				return total;// Return the cartSubtotal plus shipping and handling
			}
		};

	});

})(window.angular); */

(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	app.factory('CartService', function() {
 
		// Private items variable
		var items = {};
 
		// Angular factories return service objects
		return {
 
			getItems: function() {
				// Returns items object
                return items;
			},
 
			addItem: function(item) {
				// Checks if item already exists
				// If it exists, updates the quantity
				// If it doesn't exist, adds quantity property with value of 1 then
				// adds the item onto the items object
						
                if(!items[item.guid]) {

                    item.quantity = 1;
                    items[item.guid] = item;
                }else {
                    items[item.guid].quantity += 1;
                }
			},
 
			removeItem: function(item_id) {
                delete items[item_id];
			},
 
			emptyCart: function() {
				// Sets items object to an empty object
                items = {};
			},
 
			getItemCount: function() {
				// returns number of items, including item quantity
                var total = 0;
                angular.forEach(items, function(item) {
                    total += parseInt(item.quantity);
                });
                return total;
			},
 
			getCartSubtotal: function() {
				// Return the item quantity times item price for each item in the items object
                var total = 0;
                angular.forEach(items, function(item) {
                   total += parseInt(isNaN(item.quantity) ? 0 : item.quantity) * parseFloat(item.isSpecial ? item.specialPrice : item.price);
                });
                return total;
			},
 
			getCartTotal: function() {
				// Return the cartSubtotal plus shipping and handling
                var total = 0;
                angular.forEach(items, function(item) {
                   total += parseInt(isNaN(item.quantity) ? 0 : item.quantity) * parseFloat(item.isSpecial ? item.specialPrice : item.price);
                });
                return total;
			}
			
		};
 
	});
 
})(window.angular);