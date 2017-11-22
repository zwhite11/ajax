(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('items', {
      templateUrl: 'item-detail.template.html',
      bindings: {
        items: '<'
      }
    });
    
})();