var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('AuthorController', 
	function AuthorController($scope, $http) {$http.get('js/authors.json')
	.success(function(data) {
		$scope.authors = data;
	}
	.failure(function(data) {
		
	);
});
