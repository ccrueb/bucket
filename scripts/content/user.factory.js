angular.module('app').factory('User', function($firebaseObject,$firebaseArray, Firebase, Auth) {
    var service = {};

    service.user = {}
    if(Auth.$getAuth() != null) {
        service.user = $firebaseObject(Firebase.child(Auth.$getAuth().uid));
        service.items = $firebaseArray(Firebase.child(Auth.$getAuth().uid).child('items'))
        console.log(service.items);
    }
    

    return service;

})