angular.module('app')
    .controller('UserController', function($scope, $routeParams, $firebaseArray, Firebase) {
        
        $scope.name = $routeParams.name;
        $scope.items = $firebaseArray(Firebase.child('coral').child('items'));
        console.log($scope.items);
    })