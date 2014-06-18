(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore');
 
	// Inject in the CartService
	app.directive('msMiniCart', function(CartService) {
 
		return {
			scope: {
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/mini-cart.html',
			link: function(scope, elem, attr) {
 
				scope.getCartSubtotal = CartService.getCartSubtotal;
					// Returns the subtotal form the CartService
 
				scope.getItemCount =  CartService.getItemCount;
					// Return the item count from the CartService
			}
		};
	});
 
})(window.angular);