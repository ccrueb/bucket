angular.module('app', []);

angular.module('app').controller('MainController', function($scope) {
    
    $scope.items = [
        'Skydiving',
        'Drive a Ferrari',
        'Travel to all seven contidents'
    ]

    $scope.add = function(data) {
        $scope.items.push(data);
        $scope.newItem= '';
    }

    $scope.remove = function(data) {
        index = $scope.items.indexOf(data);
        if (index > -1) {
            $scope.items.splice(index, 1);
        }
    }
})