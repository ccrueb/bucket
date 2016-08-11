angular.module('app')
    .factory('Post', function () {


        function Post(data) {
            this.text = data.text;
            this.type = data.type;
            this.item = data.item;
            
            
        }

        return Post;
    })