//Controls homepage
angular.module('app').controller('MainController', function ($scope, Item, $firebaseArray, $firebaseObject, $firebaseAuth, $location, Firebase, PopularFactory, User, Post, Auth) {

    //Initalize values
    $scope.popularItems = PopularFactory.getPopularItems();
    $scope.auth = $firebaseAuth(Firebase);
    if ($scope.auth.$getAuth() != null) {
        
        User.setCurrentUser(Auth.$getAuth().uid);
        $scope.id = $scope.auth.$getAuth().uid;

        $scope.user = User.getCurrentUser();
        $scope.allPosts = [];
        //Add frind posts to newsfeed
        $scope.user.$loaded().then(function () {
            for (key in $scope.user.follows) {
                $firebaseArray(Firebase.child($scope.user.follows[key]).child('posts')).$loaded().then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        $scope.allPosts.push(new Post(data[i]));
                    }
                });
            }
        })
        $scope.items = $firebaseArray(Firebase.child($scope.id).child('items'));
        $scope.posts = $firebaseArray(Firebase.child($scope.id).child('posts'));
        //Add your posts to newsfeed
        $scope.posts.$loaded().then(function (data) {
            for (var i = 0; i < data.length; i++) {
                $scope.allPosts.push(new Post(data[i]));
            }
        });
    }

    //Add item to bucketlist
    $scope.addItem = function (data) {
        $scope.items.$add(data);
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

    $scope.favorite = function(post) {
        post.like();
        post.$save();
    }

    $scope.timeSince = function(date) {

    var seconds = Math.floor(((new Date().getTime()/1000) - date));

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " yrs";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " mons";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hrs";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " mins";
    }
    return Math.floor(seconds) + " secs";
}


})