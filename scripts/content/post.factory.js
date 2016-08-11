angular.module('app')
    .factory('Post', function () {


        function Post(data) {
            this.text = data;
            
        }

        return Post;
    })