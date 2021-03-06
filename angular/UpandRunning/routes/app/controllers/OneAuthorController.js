(function() {
	"use strict";
	/*  This wrapper function keeps the Controller out of the global scope */
	var OneAuthorController = function ($scope, $routeParams) {
		var authorID = $routeParams.authorID;
        
		function init() {
			// iterate throught the authors and if the authorID equals that $routeParams
			for (var i=0,len=$scope.authors.length;i<len;i++) {
				if ($scope.author[i].id === parseInt(1)) {
					$scope.publications = $scope.authors[i].publications;
					break;
				}
			}
		}

		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.authors = [
			{ 
				id: '1',
				name: 'Samuel Noah Kramer',
			 	description: "Samuel Noah Kramer was one of the world's leading Assyriologists and a world renowned expert in Sumerian history and Sumerian language.",
			 	born: '1897-09-28', died: '1990-11-26',
			 	publications : [
                {
				    title : "Sumerian Mythology",	
				    subtitle : "Study of Spiritual and Literary Achievement in the Third Millennium B.C.", 
				    additionalAuthor : "",  
			    },
			    {
					title : "History Begins at Sumer", 
				    subtitle : "Thirty-Nine Firsts in Man's Recorded History", 
				    additionalAuthor : ""
				},
				{
				title : "The Sumerians",
				subtitle : "Their History, Culture and Character",
				additionalAuthor : ""
			    },
			    {
				    title : "Inanna",
				    subtitle : "Queen of Heaven and Earth",
				    additionalAuthor : "Diane Wolkstein",  
			    },
			    {
				    title : "In the World of Sumer",
				    subtitle : "An Autobiography",
				    additionalAuthor : ""
			}]
			}, 
			{
				id: '2', 
				name: 'Simo Parpola', 
				description: "Simo Parpola is a Finnish archaeologist, currently professor of Assyriology at the University of Helsinki. He specialized in epigraphy of the Akkadian language, and has been working on the Neo-Assyrian Text Corpus Project since 1987. He is also Honorary Member of the American Oriental Society", 
				born: '1943-07-04', 
				died: '' 
			}, 
			{
				id: '3', 
				name: 'Jean Bottero', 
				description: "Jean Bottero was a French historian born in Vallauris. He was a major Assyriologist and a renowned expert on the Ancient Near East. He died in Gif-sur-Yvette.", 
				born: '1914-08-30', 
				died: '2007-12-15' 
			}, 
			{
				id: '4', 
				name: 'Thorkild Jacobsen', 
				description: "Thorkild Jacobsen was a renowned historian specializing in Assyriology and Sumerian literature. He was one of the foremost scholars on the ancient Near East.", 
				born: '1904-06-07', 
				died: '1993-05-02' 
			}
		];

		$scope.doSort = function(propName) {
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
        init();
    };
    

	OneAuthorController.$inject = ['$scope', '$routeParams'];
											  	/*	This is included to keep script minifiers from 
													breaking the $scope variable.  Without it, the 
													minifier might reduce it to $s, variables within
													quotes will not be reduced.
												 */
	angular.module('SumerianApplication')
		.controller('OneAuthorController', OneAuthorController);

}());