angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "../templates/homepage.html"
      })
      .when('/welcome', {
        templateUrl: "../templates/landing.html"
      })
      .when('/user/:name', {
        templateUrl: "../templates/user.html"
      })
      .when('/buckets', {
        templateUrl: "../templates/buckets.html"
      })

  })