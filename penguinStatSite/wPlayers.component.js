(function () {
    'use strict';
    
    angular.module('StatApp')
    .component('wPlayers', {
      templateUrl: 'wPlayers.template.html',
      bindings: {
        players: '<'
      }
    });
    
})();