(function () {
    'use strict';
    
    angular.module('StatApp')
    .component('team', {
      templateUrl: 'team.template.html',
      bindings: {
        games: '<'
      }
    });
    
})();