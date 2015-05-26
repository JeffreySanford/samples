(function () {
	"use strict";
	var SumerianApplication = angular.module('SumerianApplication', ['ngRoute']);

	SumerianApplication.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
					controller: 'AuthorsController',
					templateUrl: 'app/views/allAuthors.html'
				})

			.when('/author',
				{
					controller: 'OneAuthorController',
					templateUrl: 'app/views/oneAuthor.html'
				})
			.when('/author/:authorID',
				{
					controller: 'OneAuthorController',
					templateURL: 'app/views/oneAuthor.html'
				})

			.when('/title',
				{
					controller: 'TitlesController',
					templateUrl: 'app/views/title.html'
				})

			.otherwise( { redirectTo: '/' } );
		});
}());