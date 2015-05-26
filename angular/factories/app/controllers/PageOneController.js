(function() {
    "use strict";
    /*  This wrapper function keeps the Controller out of the global scope */

    var PageThreeController = function ($scope, $routeParams, colorFactory) {
    
        function init() {
        }
    
        $scope.soryBy = 'name';
        $scope.reverse = false;

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        init();
    };
    
	PageThreeController.$inject = ['$scope', '$routeParams', 'colorFactory'];
											  	/*	This is included to keep script minifiers from 
													breaking the $scope variable.  Without it, the 
													minifier might reduce it to $s, variables within
													quotes will not be reduced.
												 */
	angular.module('ColorApplication')
		.controller('PageThreeController', PageThreeController);

}());