//Controls user pages
angular.module('app')
  .controller('UserController', function ($scope, $routeParams, $firebaseArray, $firebaseObject, Firebase, $timeout) {

    $scope.name = $routeParams.name;


    Firebase.orderByChild('username').equalTo($routeParams.name).on("value", function (snapshot) {

      $timeout(function () {
        $scope.data = snapshot.val();
        for (key in $scope.data) {
        var id = key;
        $scope.user = $scope.data[id];
      }

    
      });
      


    })
  });