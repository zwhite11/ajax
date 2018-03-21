(function () {
    'use strict';
    
    angular.module('StatApp')
    .controller('PlayersController', PlayersController);    
    
    PlayersController.$inject = ['PlayerDataService', 'players'];
    function PlayersController(PlayerDataService, players) {
      var playerList = this;
      playerList.players = players;
    }
    
})();