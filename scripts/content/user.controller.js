angular.module('app')
    .controller('UserController', function ($scope, $routeParams, $firebaseArray, Firebase) {

        $scope.name = $routeParams.name;
        $scope.user = $firebaseArray(Firebase.child($scope.name));
        $scope.items = $firebaseArray(Firebase.child($scope.name).child('items'));
         $scope.posts = $firebaseArray(Firebase.child($scope.name).child('posts'));
        console.log($scope.items);
    });