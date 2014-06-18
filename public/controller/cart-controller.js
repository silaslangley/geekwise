(function(angular) {
 
    var app = angular.module('MyStore');
 
	// Inject in the ProductService
    app.controller('CartController', function($scope, CartService) {
 
	    $scope.items = CartService.getItems();

	    // Set the items on the scope to the items in the ProductService
 
	    $scope.getItemCount = CartService.getItemCount;

	    $scope.addItem = CartService.addItem;

	    /* function(item) {
		    // Add the item using the CartService
 
	    }; */
 
	    $scope.removeItem = CartService.removeItem;

	    // function(item) {
		    // Remove the item using the ProductService
 
	    // };

	    $scope.emptyCart = CartService.emptyCart;
 
	    $scope.cartSubtotal = CartService.getCartSubtotal;

		    // Returns the cartSubtotal from the ProductService
 
		$scope.cartTotal = CartService.getCartTotal;

		// $scope.$watchCollection('items', function(newItems, oldItems) {
			// if(newItems) {
				// angular.forEach(newItems, function(item, key) {
					// not using strict comparision because if it resembles
					//anything similar to 0 or '' I want to REMOVED
					// if (item.quantity == 0 || item.quantity == '') {
						// CartService.removeItem(item.guid);
					// }
				// });  // every time something changes in the items object, this gets fired
			// }
		// });

    });
 
})(window.angular);