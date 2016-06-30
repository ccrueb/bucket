angular.module('app')
    .factory('Auth', function (Firebase, $firebaseAuth) {
        return $firebaseAuth(Firebase);
    });