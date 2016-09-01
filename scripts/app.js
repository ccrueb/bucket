angular.module('app', ['firebase', 'ngRoute', 'ngAnimate']);


angular.module('app').run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {

    //Redirect to login page
    $rootScope.$on('$routeChangeStart', function () {
        if (!Auth.$getAuth()) {
            $location.path('/welcome');


        } else if ($location.path() === '/welcome') {
            $location.path('/');
        }
    });
}]);