(function(angular) {
 
	var app = angular.module('MyStore');
 
	app.controller('AppController', function($scope, $state, $timeout, Auth) {
 
 
		function successCallback() {
 
			$state.go('login'); // same state service when use ui-sref and when create new states in route.js


			$scope.alert = {
				type: 'success',
				message: 'You have been logged out.'
			};
 
			$timeout(function() {   // $timeout service wraps this service in scope.$apply -- like js setTimeout -- but unlike it, this service will update
				$scope.alert = undefined;
 
			}, 3000);
		}
		$scope.logout = function() {
			Auth.logout(successCallback);
		}
 
	});
 
})(window.angular);