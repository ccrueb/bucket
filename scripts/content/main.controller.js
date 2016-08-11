//Controls homepage
angular.module('app').controller('MainController', function ($scope, Item, $firebaseArray, $firebaseObject, $firebaseAuth, $location, Firebase, PopularFactory, User, Post) {

    //Initalize values
    $scope.popularItems = PopularFactory.getPopularItems();
    $scope.auth = $firebaseAuth(Firebase);
    if ($scope.auth.$getAuth() != null) {
        $scope.id = $scope.auth.$getAuth().uid;

        $scope.user = $firebaseObject(Firebase.child($scope.id))
        $scope.allPosts = [];
        //Add frind posts to newsfeed
        $scope.user.$loaded().then(function () {
            for (key in $scope.user.follows) {
                $firebaseArray(Firebase.child($scope.user.follows[key]).child('posts')).$loaded().then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        $scope.allPosts.push(data[i]);
                    }
                });
            }
        })
        $scope.items = $firebaseArray(Firebase.child($scope.id).child('items'));
        $scope.posts = $firebaseArray(Firebase.child($scope.id).child('posts'));
        //Add your posts to newsfeed
        $scope.posts.$loaded().then(function (data) {
            for (var i = 0; i < data.length; i++) {
                $scope.allPosts.push(data[i]);
            }
        });
    }

    //Add item to bucketlist
    $scope.addItem = function (data) {
        $scope.items.$add(new Item(data));
        $scope.newItem = '';
    }

    //Create a new post
    $scope.addPost = function (data) {
        data.user = $scope.user.name;
        $scope.posts.$add(new Post(data));
        $scope.post.text = ''
        console.log(data.user)
    }

    //Remove item from bucketlist
    $scope.remove = function (data) {
        console.log(data);
        var index = $scope.items.indexOf(data);
        if (index > -1) {
            $scope.items.$remove(index);
        }
    };

    //Move bucketlist item to log
    $scope.complete = function (data) {
        console.log(data + " " + $scope.items);
        var index = $scope.items.indexOf(data);
        if (index > -1) {
            data.complete = true;
            $scope.items.$save(index);
        }
    };

    //Remove item from trending
    $scope.removeTrending = function (item) {
        var index = $scope.popularItems.indexOf(item);
        if (index > -1) {
            $scope.popularItems.splice(index, 1);
        }
    }
})