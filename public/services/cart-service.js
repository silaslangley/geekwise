
(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	app.factory('CartService', function($cookieStore, ProductService) {
 
		// Private items variable
		var items = {};

 
		// Angular factories return service objects
		var cart = {
 
			getItems: function() {
				var itemsCookie;
				// Returns items object
				if (!items.length) {
					itemsCookie = $cookieStore.get('items');
					
					if(itemsCookie){
						
						angular.forEach(itemsCookie, function(item, key){ // the key is the item guid

							ProductService.getProduct(key).then(function(response){
								
								var product = response.data;
								product.quantity = item;
								items[product.guid] = product;
								
							});
						});
					}
				}
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
                cart.updateItemsCookie();                	
			},
 
			removeItem: function(item_id) {
                delete items[item_id];
                cart.updateItemsCookie();
			},
 
			emptyCart: function() {
				// Sets items object to an empty object
                items = {};
                //$cookieStore.remove('items');
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
                	
                   total += parseInt(isNaN(item.quantity) ? 0 : item.quantity) * cart.getItemPrice(item);
                });
                return total;
			},
 
			getCartTotal: function() {
				// TODO Return the cartSubtotal plus shipping and handling
                
                return cart.getCartSubtotal();
			},

			updateItemsCookie: function() {
				var itemsCookie = {};
                angular.forEach(items, function(item, key){ // looping through all the items bec can't append to the items to the cookie
                	itemsCookie[key] = item.quantity;
                	// will be the guid: quantity
                });
                $cookieStore.put('items', itemsCookie); // angular will serialize itemsCookie as a json string and save it as the value of the items cookie
			
			},

			getItemPrice: function(item){
				return parseFloat(item.isSpecial ? item.specialPrice : item.price);
			}
			
		};

		return cart; // so now it gives the object literal a name
 
	});
 
})(window.angular);