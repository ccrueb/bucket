angular.module('app').controller('MainController', function($scope, Item, $firebaseArray, $firebaseAuth) {
    
    var ref = new Firebase('https://bucktlist.firebaseio.com/')

    $scope.items = $firebaseArray(ref.child('items'));
    var auth = $firebaseAuth(ref);
    console.log(auth.$getAuth() )
    $scope.login = function() {
        if (auth.$getAuth() == null) {
        auth.$authWithOAuthPopup("facebook").then(function(authData) {
            $scope.authData = authData;
    console.log("Logged in as:", authData.uid);
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