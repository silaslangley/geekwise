(function(angular) {
	"use strict";
	
	var app = angular.module('MyStore');

	app.controller('ProductList', function($scope, ProductService) {
		// function errorCallback(reason) {
		//	$scope.errorMessage = reason.statusText;
		//};


			ProductService.getProducts().then(
				function(response) {
					
					$scope.products = response.data;

					/** angular.forEach($scope.products, function(product) {
						product.formattedTitle = 'Title: ' + product 
					
					}); **/
				},

				function(reason) {
					$scope.errorMessage = reason.statusText;
				}

			);

		
			ProductService.getProductFilters().then(
				function(response) {
					$scope.filters = response.data;
				}


			);

		// executed possibly before http completes // 
	});

})(window.angular);