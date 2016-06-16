angular.module('app').controller('MainController', function($scope, Item, $firebaseArray, $firebaseAuth, $location) {
    
    var ref = new Firebase('https://bucktlist.firebaseio.com/')

    
    $scope.auth = $firebaseAuth(ref);
    if($scope.auth.$getAuth() != null) {
        $scope.id = $scope.auth.$getAuth().uid;
        $scope.items = $firebaseArray(ref.child('coral').child('items'));
    }
    
    
    if ($scope.auth.$getAuth() == null) {
        $location.path('/login');
    }
    $scope.login = function() {
        if ($scope.auth.$getAuth() == null) {
        $scope.auth.$authWithOAuthPopup("facebook").then(function(authData) {
            $scope.authData = authData;
    console.log("Logged in as:", authData.uid);
    $location.path('/');
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
        }
    }
    
    
  // login with Facebook
  

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
        index = $scope.items.indexOf(data);
        if (index > -1) {
            data.complete = true;
            $scope.items.$save(index);
        }


    };

})