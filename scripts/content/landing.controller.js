angular.module('app')
    .controller('LandingController', function ($scope, $firebaseAuth, $firebaseObject, Auth, Firebase, $location, User) {


        $scope.auth = Auth;

        //Login with facebook
        $scope.facebookLogin = function () {
            if (Auth.$getAuth() == null) {
                Auth.$authWithOAuthPopup("facebook").then(function (authData) {
                    $scope.authData = authData;
                    User.user = $firebaseObject(Firebase.child(authData.uid));
                    $location.path('/');
                }).catch(function (error) {
                    console.log("Authentication failed:", error);
                });
            }

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
                $scope.emailLogin();
            }).catch(function (error) {
                $scope.error = error;
                console.log(error);
            });
        };

        //Login with email
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
    })