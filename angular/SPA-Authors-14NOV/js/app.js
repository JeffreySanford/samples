var Author = angular.module('Author', [
    'ngRoute'
]);

Authors.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/landing', {
        templateUrl: 'partials/landing.html',
        controller: 'landingController'
      }).
      when('/author', {
        templateUrl: 'partials/author.html',
        controller: 'authorController'
      }).
        when('/author/:authorId', {
        templateUrl: 'partials/authors-detail.html',
        controller: 'AuthorDetailController'
      }).
        when('/title', {
        templateUrl: 'partials/title.html',
        controller: 'titleController'
      }).
        when('/title/:titleId', {
        templateUrl: 'partials/title-detail.html',
        controller: 'TitleDetailController'
      }).
      otherwise({
        redirectTo: '/landing'
      });
  }]);

/* Angular JS Docs
Our application routes are defined as follows:

when('/authors'): The phone list view will be shown when the URL hash fragment is /authors. To construct this view, Angular will use the authors-list.html template and the AuthorListController controller.

when('/author/:authorId'): The author details view will be shown when the URL hash fragment matches '/author/:authorId', where :authorId is a variable part of the URL. To construct the author details view, Angular will use the author-detail.html template and the AuthorDetailCcontroller controller.

otherwise({redirectTo: '/,anding'}): triggers a redirection to /landing when the browser address doesn't match either of our routes.
*/

/* Independent Docs */