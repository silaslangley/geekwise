(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore', ['ngCookies', 'ngMessages', 'ui.router']); // injecting these other modules into this app
 
 	// app.constant('APPNAME', 'MyStore');

 	app.value('config', {
		paypal: {
			merchantID: 'silaslangley98@gmail.com'

		}
 	});
 		

})(window.angular);
