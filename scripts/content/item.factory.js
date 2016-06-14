angular.module('app')
    .factory('Item', function() {


        function Item(name) {
            this.name = name;
            this.complete = false;
        }

        return Item;
    })