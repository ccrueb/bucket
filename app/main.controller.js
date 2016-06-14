angular.module('app', []);

angular.module('app').controller('MainController', function($scope) {
    $scope.items = [
        'Skydiving',
        'Drive a Ferrari',
        'Travel to all seven contidents'
    ]

    $scope.add = function(data) {
        $scope.items.push(data);
    }
})