angular.module('app').controller('MainController', function($scope, Item, $firebaseArray, $firebaseAuth, $location, Firebase) {
      
    $scope.auth = $firebaseAuth(Firebase);
    if($scope.auth.$getAuth() != null) {
        $scope.id = $scope.auth.$getAuth().uid;
        $scope.items = $firebaseArray(Firebase.child($scope.id).child('items'));
    }
    
    
    if ($scope.auth.$getAuth() == null) {
        console.log("Hereeeeee")
        $location.path('/login');
    }


    //Create account
    $scope.createUser = function() {
        
      $scope.message = null;
      $scope.error = null;

      $scope.auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
          $scope.authData = userData;
        $scope.message = "User created with uid: " + userData.uid;
        $location.path('/');
      }).catch(function(error) {
        $scope.error = error;
        console.log(error);
      });
    };

    $scope.emailLogin = function() {
        $scope.auth.$authWithPassword({
  email: $scope.email,
  password: $scope.password
}).then(function(authData) {
    $scope.authData = authData;
  console.log("Logged in as:", authData.uid);
  $location.path('/');
}).catch(function(error) {
  console.error("Authentication failed:", error);
});
    }


    //Facebook login
    $scope.facebookLogin = function() {
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