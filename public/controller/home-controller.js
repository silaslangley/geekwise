(function(angular) {
	"use strict";
	
	var app = angular.module('MyStore');

	app.controller('homeController', function($scope, ProductService) {

		$scope.featuredProducts = new Array(); 

		ProductService.getProducts().then(function(response) {
        	var products = response.data;
        	angular.forEach(products, function(featuredProducts) {
        		if(featuredProducts.isFeatured){
        			$scope.featuredProducts.push(featuredProducts);

                }

            });

        });

	});

})(window.angular);