(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemDetailController', ItemDetailController);    
    
    ItemDetailController.$inject = ['MenuDataService', 'items', 'category'];
    function ItemDetailController(MenuDataService, items, category) {
        var itemDetail = this;
        itemDetail.items = items;
        itemDetail.category = category;  
    }
    
})();