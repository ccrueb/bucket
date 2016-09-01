//Popular item factory.
//TODO: Popular users
angular.module('app')
    .factory('PopularFactory', function (Item) {
        var service = {};

        service.getPopularItems = function () {
            return [new Item("Travel around the world"), new Item("Go to Brazil")];
        }

        return service;
    })