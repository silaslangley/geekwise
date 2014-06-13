
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