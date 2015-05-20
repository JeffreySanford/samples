(function() {
	/*  This wrapper function keeps the Controller out of the global scope */
	var OneController = function ($scope) {
        $scope.colors = [{ color: 'red' }, { color: 'blue' }, { color: 'green' }, { color: 'purple' }];
        
    ColorsApp.$inject = ['$scope'];  	        /*  This is included to keep script minifiers from 
													breaking the $scope variable.  Without it, the 
													minifier might reduce it to $s, variables within
													quotes will not be reduced.
												 */
	angular.module('ColorsApp')
		.controller('OneController', OneController);
    };
}());