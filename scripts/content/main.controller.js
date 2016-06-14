angular.module('app').controller('MainController', function($scope, Item, $firebaseArray) {
    
    var ref = new Firebase('https://bucktlist.firebaseio.com/')

    $scope.items = $firebaseArray(ref.child('items'));

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!



    $scope.add = function(data) {
        $scope.items.$add(new Item(data));
        $scope.newItem= '';
    }

    $scope.remove = function(data) {
        index = $scope.items.indexOf(data);
        if (index > -1) {
            $scope.items.$remove(index);
        }
    };

    $scope.complete = function(data) {
        data.complete = true;

    };

})