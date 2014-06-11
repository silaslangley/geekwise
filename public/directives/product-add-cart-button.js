(function(angular){
	"use strict";
	var app = angular.module('MyStore');

	app.directive('msProductAddCartButton', function(CartService){


		return {
			
			scope: {
				
				product: "=" 			
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/product-add-cart-button.html',
			link: function(scope, elem, attrs) {
 
 				scope.addItem = CartService.addItem;
 				
			}
		};
	});
}) (window.angular);