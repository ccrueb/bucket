//Post object factory
angular.module('app')
    .factory('Post', function () {
        
        function Post(data) {
            this.text = data.text;
            this.type = data.type;
            this.item = data.item;
            this.date = new Date().getTime() / 1000
            this.user = data.user
        }

        return Post;
    })