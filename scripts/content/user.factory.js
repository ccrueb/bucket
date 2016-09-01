//Keeps track of current user. Mostly unimplemented

angular.module('app').factory('User', function($firebaseObject,$firebaseArray, Firebase, Auth) {
    
    var _currentUser = {};
    
    var _userID = '';
    
    var service = {
        getCurrentUser: getCurrentUser,
        setCurrentUser: setCurrentUser,
        getUserItems: getUserItems,
        getUserPosts: getUserPosts
    };
    
    function setCurrentUser(uid) {
        _currentUser = $firebaseObject(Firebase.child(uid));
    }


    function getCurrentUser() {
        return _currentUser;
    }
    
    function getUserItems() {
        
    };
    
    function getUserPosts() {
        
    };
    
    function getFullFeed() {
        
    }
    
    return service;

})