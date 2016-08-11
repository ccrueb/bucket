//Keeps track of current user. Mostly unimplemented

angular.module('app').factory('User', function($firebaseObject,$firebaseArray, Firebase, Auth) {
    var service = {};

    service.user = {}

    return service;

})