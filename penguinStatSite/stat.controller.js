(function () {
    'use strict';
    
    angular.module('StatApp')
    .controller('StatsController', StatsController);    
    
    StatsController.$inject = ['PlayerDataService', 'stats', 'name'];
    function StatsController(PlayerDataService, stats, name) {
        var playerStats = this;
        playerStats.stats = stats;
        playerStats.name = name;
        
        
        //initialize stats to 0
        var totals = {};
        totals.mins,totals.pts,totals.fgm,totals.fga,totals.twoptm,totals.twopta,totals.threeptm,totals.threepta,totals.ftm,totals.fta,totals.oreb,totals.dreb,totals.reb,totals.ast,totals.to,totals.stl,totals.blk,totals.blkr,totals.pf,totals.flson,totals.plusminus;

        totals.mins = 0;
        totals.pts=totals.fgm=totals.fga=totals.twoptm=totals.twopta=totals.threeptm=totals.threepta=totals.ftm=totals.fta=totals.oreb=totals.dreb=totals.reb=totals.ast=totals.to=totals.stl=totals.blk=totals.blkr=totals.pf=totals.flson=totals.plusminus=totals.mins;

        var gamesPlayed;
        if(playerStats.stats == null){
            gamesPlayed = 0;
        }
        else{
            gamesPlayed = playerStats.stats.length;
        }

        var i;
        for(i=0; i < gamesPlayed; i++){
            totals.mins += playerStats.stats[i].mins;
            totals.pts += playerStats.stats[i].pts;
            totals.fgm += playerStats.stats[i].fgm;
            totals.fga += playerStats.stats[i].fga;
            totals.twoptm += playerStats.stats[i].twoptm;
            totals.twopta += playerStats.stats[i].twopta;
            totals.threeptm += playerStats.stats[i].threeptm;
            totals.threepta += playerStats.stats[i].threepta
            totals.ftm += playerStats.stats[i].ftm;
            totals.fta += playerStats.stats[i].fta;
            totals.oreb += playerStats.stats[i].oreb;
            totals.dreb += playerStats.stats[i].dreb;
            totals.reb += (playerStats.stats[i].oreb+playerStats.stats[i].dreb);
            totals.ast += playerStats.stats[i].ast;
            totals.to += playerStats.stats[i].to;
            totals.stl += playerStats.stats[i].stl;
            totals.blk += playerStats.stats[i].blk;
            totals.blkr += playerStats.stats[i].blkr;
            totals.pf += playerStats.stats[i].pf;
            totals.flson += playerStats.stats[i].flson;
            totals.plusminus += playerStats.stats[i].plusMinus;
        };

        //calculate percentages
        if(totals.fga == 0){
            totals.fgp = 0;
        }
        else{
            totals.fgp = ((totals.fgm/totals.fga)*100).toFixed(2);
        }
        if(totals.twopta == 0){
            totals.twoptp = 0;
        }
        else{
            totals.twoptp = ((totals.twoptm/totals.twopta)*100).toFixed(2);
        }
        if(totals.threepta == 0){
            totals.threeptp = 0;
        }
        else{
            totals.threeptp = ((totals.threeptm/totals.threepta)*100).toFixed(2);
        }

        playerStats.totals = [];
        playerStats.totals.push(totals);
        console.log("stats", playerStats.stats);
        console.log("totals", playerStats.totals);
        

        //calculate averages
        var averages = {};
        if(gamesPlayed == 0){
            averages = totals;
        }
        else{
            averages.mins = ( totals.mins/gamesPlayed).toFixed(2);
            averages.pts = ( totals.pts/gamesPlayed).toFixed(2);
            averages.fgm = ( totals.fgm/gamesPlayed).toFixed(2);
            averages.fga = ( totals.fga/gamesPlayed).toFixed(2);
            averages.twoptm = ( totals.twoptm/gamesPlayed).toFixed(2);
            averages.twopta = ( totals.twopta/gamesPlayed).toFixed(2);
            averages.threeptm = ( totals.threeptm/gamesPlayed).toFixed(2);
            averages.threepta = ( totals.threepta).toFixed(2);
            averages.ftm = ( totals.ftm/gamesPlayed).toFixed(2);
            averages.fta = ( totals.fta/gamesPlayed).toFixed(2);
            averages.oreb = ( totals.oreb/gamesPlayed).toFixed(2);
            averages.dreb = ( totals.dreb/gamesPlayed).toFixed(2);
            averages.reb = parseFloat(averages.oreb) + parseFloat(averages.dreb);
            averages.ast = ( totals.ast/gamesPlayed).toFixed(2);
            averages.to = ( totals.to/gamesPlayed).toFixed(2);
            averages.stl = ( totals.stl/gamesPlayed).toFixed(2);
            averages.blk = ( totals.blk/gamesPlayed).toFixed(2);
            averages.blkr = ( totals.blkr/gamesPlayed).toFixed(2);
            averages.pf = ( totals.pf/gamesPlayed).toFixed(2);
            averages.flson = ( totals.flson/gamesPlayed).toFixed(2);
            averages.plusminus = (totals.plusminus/gamesPlayed).toFixed(2);

        }

        playerStats.averages = []
        playerStats.averages.push(averages);
        console.log("averages", playerStats.averages);
        
    }
    
})();