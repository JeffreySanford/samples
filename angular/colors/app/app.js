(function () {
	var ColorsApp = angular.module('ColorsApp', ['ngRoute']);

	ColorsApp.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
                    templateUrl: 'app/views/mainPage.html',
				})

			.when('/one',
				{
                    templateUrl: 'app/views/one.html'
				})
        		
            .when('/two',
				{
					templateUrl: 'app/views/two.html'
				})

			.otherwise( { redirectTo: '/' } );
		});
}());