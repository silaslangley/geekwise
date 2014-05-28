(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.controller('ProductDetails', function($scope, $stateParams, ProductService) {
		 // Set the id from the $stateParams to a local product_guid variable
        var product_guid = $stateParams.id;

        $scope.product;
        ProductService.getProducts().then(function(response) {
        	var products = response.data;
        	angular.forEach(products, function(product) {
        		if(product.guid === product_guid) {
        			$scope.product = product;
                }
            });
        });

	});

})(window.angular);