(function(angular) {
 
    var app = angular.module('MyStore');
 
	// Inject in the ProductService
    app.controller('CartController', function($scope, CartService) {
 
	    // Set the items on the scope to the items in the ProductService
	    $scope.items;
 
	    $scope.addItem = CartService.addItem;

	    /* function(item) {
		    // Add the item using the CartService
 
	    }; */
 
	    $scope.removeItem = CartService.removeItem;

	    // function(item) {
		    // Remove the item using the ProductService
 
	    // };
 
	    $scope.cartSubtotal = function() {
		    CartService.getCartSubtotal();

		    // Returns the cartSubtotal from the ProductService
 
	    };
 
	    $scope.cartTotal = function() {
	    	CartService.getCartTotal();
		    // Returns the cartTotal from the ProductService
	    }
 
    });
 
})(window.angular);