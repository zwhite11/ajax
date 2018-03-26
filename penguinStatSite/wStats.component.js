(function () {
    'use strict';
    
    angular.module('StatApp')
    .component('stats', {
      templateUrl: 'wPlayerStats.template.html',
      bindings: {
        stats: '<'
      }
    });
    
})();