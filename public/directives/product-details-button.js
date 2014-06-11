(function(angular){
	"use strict";
	var app = angular.module('MyStore');

	app.directive('msProductDetailsButton', function(){


		return {
			// E for element
			// A for attribute
			// C for class
			scope: {
				// 3 types of bindings for scope prop's
				// @ which is a string
				// & which is a one-way binding -- for passing a function into it
				// = which is a two-way binding
				productId: '@' // product-id			
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/product-details-button.html'
			// link: function(scope, elem, attrs) {
 			//	scope.productId = attr.productId;
			//}   this is another way do it -- instead of productId: '@' in scope:
			// method for getting the scope, getting the actual element, and getting the attribute
		};
	});
}) (window.angular);