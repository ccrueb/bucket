angular.module('app', []);

angular.module('app').controller('MainController', function($scope, Item) {
    
    $scope.items = [
        new Item('Skydiving'),
        new Item('Drive a Ferrari'),
        new Item('Travel to all seven contidents')
    ]

    $scope.logs = [
        {
            name: "Go to Paris",
            date: "6/10/2013"
        }
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
    };

    $scope.complete = function(data) {
        $scope.remove(data);

    };

})