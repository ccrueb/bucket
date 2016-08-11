//Controls user pages
angular.module('app')
  .controller('UserController', function ($scope, $routeParams, $firebaseArray,$firebaseObject, Firebase) {

    $scope.name = $routeParams.name;
    $scope.user = $firebaseObject(Firebase.child($scope.name));
    $scope.items = $firebaseArray(Firebase.child($scope.name).child('items'));
    $scope.posts = $firebaseArray(Firebase.child($scope.name).child('posts'));
  });