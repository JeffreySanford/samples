(function () {
	var ColorsApp = angular.module('ColorsApp', ['ngRoute']);

	ColorsApp.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
                    controller: 'app/controllers/MainPageController',
                    templateUrl: 'app/views/mainPage.html'
				})

			.when('/one', {
                    controller: 'appcontroller/OneController.js',
                    templateUrl: 'app/views/one.html'
				})
        		
            .when('/two',
				{
                    controller: 'appcontroller/TwoController.js',
					templateUrl: 'app/views/two.html'
				})

			.otherwise( 
            { 
                    template: "This doesn't exist" 
            });
		});
}());