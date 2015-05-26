var SumerianApplication = angular.module('SumerianApplication', ['ngRoute']);

(function() {
	/*  This wrapper function keeps the Controller out of the global scope */
	var AuthorsController = function ($scope) {
		$scope.sortBy = 'name';
		$scope.reverse = false;
		

		$scope.authors = [
			{ 
				name: 'Samuel Noah Kramer',
			 	description: "Samuel Noah Kramer was one of the world's leading Assyriologists and a world renowned expert in Sumerian history and Sumerian language.",
			 	born: '1897-09-28', died: '1990-11-26' 
			}, 
			{ 
				name: 'Simo Parpola', 
				description: "Simo Parpola is a Finnish archaeologist, currently professor of Assyriology at the University of Helsinki. He specialized in epigraphy of the Akkadian language, and has been working on the Neo-Assyrian Text Corpus Project since 1987. He is also Honorary Member of the American Oriental Society", 
				born: '1943-07-04', 
				died: '' 
			}, 
			{ 
				name: 'Jean Bottero', 
				description: "Jean Bottero was a French historian born in Vallauris. He was a major Assyriologist and a renowned expert on the Ancient Near East. He died in Gif-sur-Yvette.", 
				born: '1914-08-30', 
				died: '2007-12-15' 
			}, 
			{ 
				name: 'Thorkild Jacobsen', 
				description: "Thorkild Jacobsen was a renowned historian specializing in Assyriology and Sumerian literature. He was one of the foremost scholars on the ancient Near East.", 
				born: '1904-06-07', 
				died: '1993-05-02' 
			}
		];

		$scope.doSort = function(propName) {
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}
	}
  
	AuthorsController.$inject = ['$scope'];  	/*	This is included to keep script minifiers from 
													breaking the $scope variable.  Without it, the 
													minifier might reduce it to $s, variables within
													quotes will not be reduced.
												 */
	angular.module('SumerianApplication')
		.controller('AuthorsController', AuthorsController);
}());