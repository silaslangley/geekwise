
(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	app.factory('CartService', function($cookieStore, ProductService, config) {
 
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
                	
                   var s = parseInt(item.quantity);
	               var q = isNaN(s) ? 0 : s;
	               var p = cart.getItemPrice(item);
                   total += q * p;
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
			},

			checkout: function(){
				// create form DOM element
				var form = $('<form></form>');

				var data = {
					business: config.paypal.merchantId,
					currency_code: 'USD',
					cmd: '_cart',
					upload: 1,
					charset: "utf-8"
				};

				var counter = 0;

				angular.forEach(items, function(item, key) {
					counter += 1;
					
					data["item_number_" + counter] = item.id;
					data["item_name_" + counter] = item.title;
					data["quantity_" + counter] = item.quantity;
					data["amount_" + counter] = cart.getItemPrice(item);
				});

				form.attr("action", "https://www.paypal.com/cgi-bin/webscr");
				form.attr("method", "POST");
				form.attr("style", "display:none;");

				angular.forEach(data, function(value, name) {
					if (value != null) {
						var input = $("<input></input>").attr("type", "hidden").attr("name", name).val(value);
						form.append(input);
					}
				});

				$("body").append(form);
 
				// submit form
				form.submit();
				form.remove();
			}
			
		};

		return cart; // so now it gives the object literal a name
 
	});
 
})(window.angular);