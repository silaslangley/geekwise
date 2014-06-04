(function(angular) {
	var app = angular.module('MyStore');

	app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/', /**when it matches the url, it activates this state **/
                controller: 'homeController',
                templateUrl: 'views/home.html'
            })
            
            .state('products', {
                url: '/products',
                controller: 'ProductList',
                templateUrl: 'views/product-list.html'
            })
            
            .state('product', {
                url: '/product/:id',
                controller: 'ProductDetails',
                templateUrl: 'views/product-detail.html'
            })
            
			.state('about', {
                url: '/about',
                templateUrl: ''
            })
            .state('contact', {
                url: '/contact',
                templateUrl: ''
            });

    });
})(window.angular);