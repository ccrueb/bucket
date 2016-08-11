//Popular item factory.
//TODO: Popular users
angular.module('app')
    .factory('PopularFactory', function () {
        var service = {};

        service.getPopularItems = function () {
            return ["Travel around the world", "Climb a mountain", "Go surfing"]
        }

        return service;
    })