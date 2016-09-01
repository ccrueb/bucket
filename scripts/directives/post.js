angular.module('app')

.directive('post', function() {
  return {
    restrict: 'E',
    scope: {
      post: '=post'
    },
    templateUrl: 'scripts/directives/post.html'
  };
});

