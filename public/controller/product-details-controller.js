(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.controller('ProductDetails', function($scope, $stateParams, ProductService) {
		 // Set the id from the $stateParams to a local product_guid variable
        var product_guid = $stateParams.id;

        $scope.featuredProducts = [];

        /* if(product.guid === product_guid) {
            $scope.product = product;
        } else if (product.isFeatured) {
            $scope.featuredProducts.push(product);

        } */


        $scope.product;
        ProductService.getProducts().then(function(response) {
        	var products = response.data;
        	angular.forEach(products, function(product) {
        		if(product.guid === product_guid) {
        			$scope.product = product;
                } else if (product.isFeatured) {
                    $scope.featuredProducts.push(product);
                }
            });
        });

	});

})(window.angular);