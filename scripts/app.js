angular.module('app', ['firebase', 'ngRoute', 'ngAnimate']);


angular.module('app').run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth, User,Firebase, $firebaseObject) {
    
    //Redirect to login page
    $rootScope.$on('$routeChangeStart', function (event) {
        if (!Auth.$getAuth()) {
            $location.path('/login');
        }
    });
}]);