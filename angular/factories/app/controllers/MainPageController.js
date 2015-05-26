(function() {
    "use strict";
    /*  This wrapper function keeps the Controller out of the global scope */

    var MainPageController = function ($scope, $routeParams, colorFactory) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.colors = [];
        
        function init() {
            $scope.colors = colorFactory.getColors();
        }
        
        init();
        
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        init();
    };
    
	MainPageController.$inject = ['$scope', '$routeParams', 'colorFactory'];
											  	/*	This is included to keep script minifiers from 
													breaking the $scope variable.  Without it, the 
													minifier might reduce it to $s, variables within
													quotes will not be reduced.
												 */
	angular.module('ColorApplication')
		.controller('MainPageController', MainPageController);
        console.info('Min Page controller registered');

}());