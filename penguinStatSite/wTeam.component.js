(function () {
    'use strict';
    
    angular.module('StatApp')
    .component('wTeam', {
      templateUrl: 'wTeam.template.html',
      bindings: {
        games: '<'
      }
    });
    
})();