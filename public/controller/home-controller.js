(function(angular) {
	"use strict";
	
	var app = angular.module('MyStore');

	app.controller('homeController', function($scope, ProductService) {

		


		ProductService.getFeaturedProducts().then(function(response) {
        	
			$scope.featuredProducts = response.data;

			
		}); 
 



        	// angular.forEach(products, function(featuredProducts) {
        	// 	if(featuredProducts.isFeatured){
        	//		$scope.featuredProducts.push(featuredProducts);

   //             }
   //         });

    //    });
		
	});

})(window.angular);