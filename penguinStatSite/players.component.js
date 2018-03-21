(function () {
    'use strict';
    
    angular.module('StatApp')
    .component('players', {
      templateUrl: 'players.template.html',
      bindings: {
        players: '<'
      }
    });
    
})();