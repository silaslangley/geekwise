(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.factory('ProductService', function($http) {
		// Angular factories return service objects
		return {
			// Object Literal
			getProducts: function() {
				// Return the promise
				return $http.get('assets/json/products.json');
			},

			getProductFilters: function() {
				return $http.get('assets/json/product-filters.json');
			}
		}

	});

})(window.angular);

