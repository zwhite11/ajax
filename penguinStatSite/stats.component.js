(function () {
    'use strict';
    
    angular.module('StatApp')
    .component('stats', {
      templateUrl: 'playerStats.template.html',
      bindings: {
        stats: '<'
      }
    });
    
})();