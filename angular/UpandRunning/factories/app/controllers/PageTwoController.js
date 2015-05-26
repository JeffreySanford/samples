(function() {
    "use strict";
    /*  This wrapper function keeps the Controller out of the global scope */

    var PageTwoController = function ($scope, $routeParams) {
    
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
    
	PageTwoController.$inject = ['$scope', '$routeParams'];
											  	/*	This is included to keep script minifiers from 
													breaking the $scope variable.  Without it, the 
													minifier might reduce it to $s, variables within
													quotes will not be reduced.
												 */
	angular.module('ColorApplication')
		.controller('PageTwoController', PageTwoController);

}());