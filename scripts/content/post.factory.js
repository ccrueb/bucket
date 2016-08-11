//Post object factory
angular.module('app')
    .factory('Post', function () {
        
        function Post(data) {
            this.text = data.text;
            this.type = data.type;
            this.item = data.item;
            var d = new Date();
            this.date = d.getDate();
            this.user = data.user
        }

        return Post;
    })