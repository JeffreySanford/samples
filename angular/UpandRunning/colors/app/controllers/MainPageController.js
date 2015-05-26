(function() {

	/*  This wrapper function keeps the Controller out of the global scope */
	var MainPageController = function ($scope) {
    console.log('Main Page Controller has been loaded');
        
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.colors = "[{ colorID: '0', name: 'black', hexcode: '#000000' },{ colorID: '1', name: 'brown', hexcode: '#a52a2a' },{ colorID: '2', name: 'red', hexcode: '#ff0000' },{ colorID: '3', name: 'orange', hexcode: '#ffa500' },{ colorID: '4', name: 'yellow', hexcode: '#ffff00' },{ colorID: '5', name: 'green', hexcode: '#008000' },{ colorID: '6', name: 'blue', hexcode: '#0000ff' },{ colorID: '7', name: 'violet', hexcode: '#ee82ee' },{ colorID: '9', name: 'gold', hexcode: '#ffd700' },{ colorID: '0', name: 'white', hexcode: '#ffffff' }]";
        
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