angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider.when('/login',
        {
            templateUrl: "../templates/landing.html"
        }).
        when('/', {
            templateUrl: "../templates/homepage.html"
        }).
        when('/user/:name', {
            templateUrl: "../templates/user.html"
        }).
        when('/buckets', {
            templateUrl: "../templates/buckets.html"
        })
        
    })