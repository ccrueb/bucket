angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider.when('/login',
        {
            templateUrl: "../templates/login.html"
        }).
        when('/', {
            templateUrl: "../templates/homepage.html"
        })
        
    })