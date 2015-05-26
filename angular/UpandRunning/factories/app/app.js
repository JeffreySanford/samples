(function () {
	"use strict";
	var ColorApplication = angular.module('ColorApplication', ['ngRoute']);

	ColorApplication.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
					controller: 'MainPageController',
					templateUrl: 'app/views/mainPage.html'
				})

			.when('/pageOne',
				{
					controller: 'PageOneController',
					templateUrl: 'app/views/pageOne.html'
				})
			.when('/pageTwo',
				{
					controller: 'PageTwoController',
					templateURL: 'app/views/pageTwo.html'
				})

			.when('/pageThree',
				{
					controller: 'PageThreeController',
					templateUrl: 'app/views/pageThree.html'
				})

			.otherwise( { redirectTo: '/' } );
		});
}());