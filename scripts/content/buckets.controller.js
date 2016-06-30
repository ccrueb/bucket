angular.module('app').controller('BucketController', function(User, $scope) {
    $scope.test = User.user;


    $scope.a = function() {
        console.log($scope.test);
    }

    
})