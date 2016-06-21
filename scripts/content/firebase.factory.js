angular.module('app')
    .factory('Firebase', function () {
        return new Firebase('https://bucktlist.firebaseio.com/');
    });