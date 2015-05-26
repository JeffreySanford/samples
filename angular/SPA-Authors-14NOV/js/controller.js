var AuthorControllers = angular.module('AuthorControllers', []);

AuthorControllers.controller('AuthorListController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('models/data.json').success(function(data) {
      $scope.authors = data;
    });

  }]);

AuthorControllers.controller('AuthorDetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.authorId = $routeParams.authorId;
  }]);

/* Angular JS Docs
Again, note that we created a new module called SPA-AuthorControllers. For small AngularJS applications, it's common to create just one module for all of your controllers if there are just a few. As your application grows it is quite common to refactor your code into additional modules. For larger apps, you will probably want to create separate modules for each major feature of your app.

Because our example app is relatively small, we'll just add all of our controllers to the SPA-AuthorControllers module.
*/

/* Independent Docs */