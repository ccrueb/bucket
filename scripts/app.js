angular.module('app', ['firebase', 'ngRoute', 'ngAnimate']);


angular.module('app').run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth, User,Firebase, $firebaseObject) {
    
    //Redirect to login page
    $rootScope.$on('$routeChangeStart', function (event, prev, curr) {
        if (!Auth.$getAuth() && $location.path() !== '/login' ) {
            $location.path('/welcome');
        }
    });
}]);