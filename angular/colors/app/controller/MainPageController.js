(function() {

	/*  This wrapper function keeps the Controller out of the global scope */
	var MainPageController = function ($scope) {
    console.log('Main Page Controller has been loaded');
        
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.colors = [];
        
        function init() {
            $scope.colors = colorFactory.getColors();
        }
        
        init();
        
        ColorsApp.$inject = ['$scope'];  	     /*	This is included to keep script minifiers from 
													breaking the $scope variable.  Without it, the 
													minifier might reduce it to $s, variables within
													quotes will not be reduced.
												  */
        	angular.module('ColorsApp')
		.controller('MainPageController', MainPageController);
    };
}());