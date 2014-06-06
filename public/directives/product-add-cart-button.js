(function(angular){
	"use strict";
	var app = angular.module('MyStore');

	app.directive('msProductAddCartButton', function(CartService){


		return {
			// E for element
			// A for attribute
			// C for class
			scope: {
				// 3 types of bindings for scope prop's
				// @ which is a string
				// & which is a one-way binding -- for passing a function into it
				// = which is a two-way binding
				product: "=" // product-id			
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/product-add-cart-button.html'
			link: function(scope, elem, attrs) {
 			
 				scope.addItem = CartService.addItem;
 				//	scope.productId = attr.productId;
			//}   this is another way do it -- instead of productId: '@' in scope:
			// method for getting the scope, getting the actual element, and getting the attribute
		};
	})
}) (window.angular);