(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	app.factory('ProductService', function($http) {
		// Angular factories return service objects
		return {
			// Object literal
 
			getProduct: function(guid) {
				return $http.get('/api/product/'+guid);
			},
 
			getProducts: function() {
				// Return the promise
				return $http.get('/api/products');
			},



			getFeaturedProducts: function() {
				return $http.get('/api/products/featured');
			},
 
			/* /api/products/featured?featured=true */

			getProductFilters: function() {
				// Return the promise
				return $http.get('assets/json/product-filters.json');
			}
		}
 
	});
 
})(window.angular);



