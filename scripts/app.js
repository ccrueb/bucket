angular.module('app', ['firebase', 'ngRoute']);


angular.module('app').run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth, User,Firebase, $firebaseObject) {
    $rootScope.$on('$routeChangeStart', function (event) {
        
        if (!Auth.$getAuth()) {
            console.log('DENY');
            console.log(Auth.$getAuth.uid);
            console.log(Auth.$getAuth())
            
            $location.path('/login');
        }
        else {
            console.log('ALLOW');
            $location.path('/');
        }
    });
}]);
//