angular.module('app').controller('MainController', function ($scope, Item, $firebaseArray, $firebaseObject, $firebaseAuth, $location, Firebase, PopularFactory, User, Post) {

    $scope.popularItems = PopularFactory.getPopularItems();
    $scope.auth = $firebaseAuth(Firebase);
    if ($scope.auth.$getAuth() != null) {
        $scope.id = $scope.auth.$getAuth().uid;
        $scope.user=  $firebaseObject(Firebase.child($scope.id))
        $scope.allPosts = [];
        $scope.user.$loaded().then(function() {
            for(key in $scope.user.follows) {
                $firebaseArray(Firebase.child($scope.user.follows[key]).child('posts')).$loaded().then(function(data){
                for(var i = 0; i < data.length; i++) {
                    $scope.allPosts.push(data[i]);
                } 
                console.log($scope.allPosts);        
            
        });
            }
        })
        $scope.items = $firebaseArray(Firebase.child($scope.id).child('items'));
        $scope.posts = $firebaseArray(Firebase.child($scope.id).child('posts'));
        
        $scope.posts.$loaded().then(function(data) {
             
                for(var i = 0; i < data.length; i++) {
                    $scope.allPosts.push(data[i]);
                }    
            console.log($scope.allPosts);
        });
        
    }
    
    


    if ($scope.auth.$getAuth() == null) {
        $location.path('/login');
    } else {
        $location.path('/');
    }


    //Create account
    $scope.createUser = function () {

        $scope.message = null;
        $scope.error = null;

        $scope.auth.$createUser({
            email: $scope.email,
            password: $scope.password
        }).then(function (userData) {
            $scope.authData = userData;
            $scope.message = "User created with uid: " + userData.uid;
            $location.path('/');
        }).catch(function (error) {
            $scope.error = error;
            console.log(error);
        });
    };

    $scope.emailLogin = function () {
        $scope.auth.$authWithPassword({
            email: $scope.email,
            password: $scope.password
        }).then(function (authData) {
            $scope.authData = authData;
            console.log("Logged in as:", authData.uid);
            $location.path('/');
        }).catch(function (error) {
            console.error("Authentication failed:", error);
        });
    }


    //Facebook login
    $scope.facebookLogin = function () {
        console.log("Here");
        if ($scope.auth.$getAuth() == null) {
            $scope.auth.$authWithOAuthPopup("facebook").then(function (authData) {
                $scope.authData = authData;
                console.log("Logged in as:", authData.uid);
                $location.path('/');
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });
        }
    }


    // login with Facebook


    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!



    $scope.addItem = function (data) {
        $scope.items.$add(new Item(data));
        $scope.newItem = '';
    }
    
    $scope.addPost = function (data) {
        data.user = $scope.user.name;
        $scope.posts.$add(new Post(data));
        $scope.post.text =''
       console.log(data.user)
    }
    
    

    $scope.remove = function (data) {
        index = $scope.items.indexOf(data);
        if (index > -1) {
            $scope.items.$remove(index);
        }
    };

    $scope.complete = function (data) {
        index = $scope.items.indexOf(data);
        if (index > -1) {
            data.complete = true;
            $scope.items.$save(index);
        }


    };

    $scope.removeTrending = function (item) {
        var index = $scope.popularItems.indexOf(item);
            
            if(index > -1) {
                $scope.popularItems.splice(index, 1);
        
            }
            
    }
})