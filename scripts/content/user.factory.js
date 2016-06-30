angular.module('app').factory('User', function($firebaseObject, Firebase, Auth) {
    var service = {};

    service.user = {}
    if(Auth.$getAuth() != null) {
        service.user = $firebaseObject(Firebase.child(Auth.$getAuth().uid));
    }
    

    return service;

})