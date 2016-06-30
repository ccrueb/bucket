angular.module('app')
.controller('LoginController', function($scope, $firebaseAuth, $firebaseObject, Auth, Firebase, $location, User) {
        
        
        console.log($scope.auth);
        $scope.facebookLogin = function () {
        console.log("Here");
        if (Auth.$getAuth() == null) {
            Auth.$authWithOAuthPopup("facebook").then(function (authData) {
                $scope.authData = authData;
                console.log($scope.auth);
                console.log("Logged in as:", authData.uid);
                User.user = $firebaseObject(Firebase.child(authData.uid));
                $location.path('/');
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });
        }
    }
    })