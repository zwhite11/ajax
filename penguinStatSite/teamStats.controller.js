(function () {
    'use strict';
    
    angular.module('StatApp')
    .controller('TeamStatsController', TeamStatsController);    
    
    TeamStatsController.$inject = ['TeamDataService', 'stats', 'round','ourStats'];
    function TeamStatsController(TeamDataService, stats, round, ourStats) {
        var teamStats = this;
        teamStats.stats = stats;
        teamStats.round = round;
        teamStats.ourStats = ourStats;
        console.log("round?", teamStats.round);
        console.log("stats", teamStats.stats);

        //pull out specific game based on the round

        for(var i = 0; i < teamStats.stats.length; i++){
            if(teamStats.stats[i].round == teamStats.round){
                teamStats.opponentStats = teamStats.stats[i];
                teamStats.opponent = teamStats.stats[i].opponent;
            }
        }

        for(var i = 0; i < teamStats.ourStats.length; i++){
            if(teamStats.ourStats[i].round == teamStats.round){
                teamStats.ourStats = teamStats.ourStats[i];
            }
        }

        console.log("Ostats", teamStats.opponentStats);
        console.log("OURstats", teamStats.ourStats);
        

    }
    
})();