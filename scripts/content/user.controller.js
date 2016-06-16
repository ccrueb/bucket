angular.module('app')
    .controller('UserController', function($scope, $routeParams, $firebaseArray) {
        var ref = new Firebase('https://bucktlist.firebaseio.com/');
        $scope.name = $routeParams.name;
        $scope.items = $firebaseArray(ref.child('coral').child('items'));
        console.log($scope.items);
    })