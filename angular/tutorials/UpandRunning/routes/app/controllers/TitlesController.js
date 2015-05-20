(function() {
	"use strict";
	/*  This wrapper function keeps the Controller out of the global scope */
	var TitlesController = function ($scope) {
        TitlesController.$inject = ['$scope'];  	/*	This is included to keep script minifiers from 
													breaking the $scope variable.  Without it, the 
													minifier might reduce it to $s, variables within
													quotes will not be reduced.
												 */
	
        $scope.publications = [{}];

        angular.module('SumerianApplication')
		.controller('TitlesController', TitlesController);

	};
}());