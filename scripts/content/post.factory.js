//Post object factory
angular.module('app')
    .factory('Post', function () {

        function Post(data) {
            this.text = data.text;
            this.type = data.type;
            this.item = data.item;
            if(data.date) {
                this.date = data.date;
            } else {
                this.date = new Date().getTime() / 1000;
            }
            
            this.user = data.user;
            this.likes = []
            this.like = function (id) {
                if(this.likes.indexOf(id) > -1) {
                    this.likes.splice(this.likes.indexOf(id), 1)
                } else {
                    this.likes.push(id);
                }
            }
        }

        return Post;
    })