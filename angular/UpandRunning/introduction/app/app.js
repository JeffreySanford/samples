var app = angular.module('app', ['ngRoute']).config(function($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'login.html',
			controller: 'LoginController'
        });

		$routeProvider.when('/home', {
			templateUrl: 'home.html',
			controller: 'HomeController'
		});

		$routeProvider.otherwise({ redirectsTo: '/login' });
});

/* angular.module("app); - Getter function, the above is the setter */

app.factory("AuthenticationService", function($scope, $location) {
	return {
		login: function(credentials) {
			/* declaritive in the UI, imperitive in the modifying the state */

			if (credentials.username === "jeffrey") { 
                $location.path('/home'); 
            }
			else if (credentials.username !== "jeffrey") { alert('username must be jeffrey'); }
        },

		logout: function(credentials) {
			$location.path('/login');
		}
	};
});

app.controller('LoginController', function($scope, AuthenticationService) {
	$scope.credentials = { username: "", password: "" };

	$scope.login = function() {
		AuthenticationService.login($scope.credentials);
		};
	});

app.controller('HomeController', function($scope, AuthenticationService) {
	$scope.title = "user";
	$scope.message = "mouse over the images to see a directive";

	$scope.logout =function() {
		AuthenticationService.logout($scope.credentials);
	};
});

app.directive('showsMessageWhenHovered', function() {
	return {

		restrict: "A", // A = Attribute, C = Class Name, E = Element, M = HTML Comments
		link: function(scope, element, attributes) {
			var originalMessage = scope.message;
			
			element.bind("mouseover", function() {
				scope.message = attributes.message;
				scope.$apply();
			});

			element.bind("mouseout", function() {
				scope.message = originalMessage;
				scope.$apply();
			});
		}
	};
});