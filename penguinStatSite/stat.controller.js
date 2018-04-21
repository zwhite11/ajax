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

        //separate home and away games
        playerStats.homeGames = [];
        playerStats.awayGames = [];
        for(i=0; i < gamesPlayed; i++){
            if (playerStats.stats[i].location == "H"){
                playerStats.homeGames.push(playerStats.stats[i]);
            }
            else{
                playerStats.awayGames.push(playerStats.stats[i]);
            }
        }
        // console.log("homeGames", playerStats.homeGames);
        // console.log("awayGames", playerStats.awayGames);


        //separate wins and losses
        playerStats.wins = [];
        playerStats.losses = [];
        for(i=0; i < gamesPlayed; i++){
            if (playerStats.stats[i].result == "W"){
                playerStats.wins.push(playerStats.stats[i]);
            }
            else{
                playerStats.losses.push(playerStats.stats[i]);
            }
        }

        // console.log("wins", playerStats.wins);
        // console.log("losses", playerStats.losses);

        var i;
        for(i=0; i < gamesPlayed; i++){
            totals.mins += playerStats.stats[i].mins;
            totals.pts += playerStats.stats[i].pts;
            totals.fgm += playerStats.stats[i].fgm;
            totals.fga += playerStats.stats[i].fga;
            totals.twoptm += playerStats.stats[i].twoptm;
            totals.twopta += playerStats.stats[i].twopta;
            totals.threeptm += playerStats.stats[i].threeptm;
            totals.threepta += playerStats.stats[i].threepta;
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
        if(totals.fta == 0){
            totals.ftp = 0;
        }
        else{
            totals.ftp = ((totals.ftm/totals.fta)*100).toFixed(2);
        }

        playerStats.totals = [];
        playerStats.totals.push(totals);
        // console.log("stats", playerStats.stats);
        // console.log("totals", playerStats.totals);
        

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
            averages.threepta = ( totals.threepta/gamesPlayed).toFixed(2);
            averages.ftm = ( totals.ftm/gamesPlayed).toFixed(2);
            averages.fta = ( totals.fta/gamesPlayed).toFixed(2);
            averages.oreb = ( totals.oreb/gamesPlayed).toFixed(2);
            averages.dreb = ( totals.dreb/gamesPlayed).toFixed(2);
            averages.reb = (parseFloat(averages.oreb) + parseFloat(averages.dreb)).toFixed(2);
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
        // console.log("averages", playerStats.averages);

        //////////////////////// HOME STATS ////////////////////////////

        //initialize home stats to 0
        var homeTotals = {};
        homeTotals.mins,homeTotals.pts,homeTotals.fgm,homeTotals.fga,homeTotals.twoptm,homeTotals.twopta,homeTotals.threeptm,homeTotals.threepta,homeTotals.ftm,homeTotals.fta,homeTotals.oreb,homeTotals.dreb,homeTotals.reb,homeTotals.ast,homeTotals.to,homeTotals.stl,homeTotals.blk,homeTotals.blkr,homeTotals.pf,homeTotals.flson,homeTotals.plusminus;

        homeTotals.mins = 0;
        homeTotals.pts=homeTotals.fgm=homeTotals.fga=homeTotals.twoptm=homeTotals.twopta=homeTotals.threeptm=homeTotals.threepta=homeTotals.ftm=homeTotals.fta=homeTotals.oreb=homeTotals.dreb=homeTotals.reb=homeTotals.ast=homeTotals.to=homeTotals.stl=homeTotals.blk=homeTotals.blkr=homeTotals.pf=homeTotals.flson=homeTotals.plusminus=homeTotals.mins;

        var gamesPlayed;
        if(playerStats.stats == null){
            gamesPlayed = 0;
        }
        else{
            gamesPlayed = playerStats.stats.length;
        }

        var i;
        for(i=0; i < gamesPlayed; i++){
            if(playerStats.stats[i].location == "H"){
                homeTotals.mins += playerStats.stats[i].mins;
                homeTotals.pts += playerStats.stats[i].pts;
                homeTotals.fgm += playerStats.stats[i].fgm;
                homeTotals.fga += playerStats.stats[i].fga;
                homeTotals.twoptm += playerStats.stats[i].twoptm;
                homeTotals.twopta += playerStats.stats[i].twopta;
                homeTotals.threeptm += playerStats.stats[i].threeptm;
                homeTotals.threepta += playerStats.stats[i].threepta;
                homeTotals.ftm += playerStats.stats[i].ftm;
                homeTotals.fta += playerStats.stats[i].fta;
                homeTotals.oreb += playerStats.stats[i].oreb;
                homeTotals.dreb += playerStats.stats[i].dreb;
                homeTotals.reb += (playerStats.stats[i].oreb+playerStats.stats[i].dreb);
                homeTotals.ast += playerStats.stats[i].ast;
                homeTotals.to += playerStats.stats[i].to;
                homeTotals.stl += playerStats.stats[i].stl;
                homeTotals.blk += playerStats.stats[i].blk;
                homeTotals.blkr += playerStats.stats[i].blkr;
                homeTotals.pf += playerStats.stats[i].pf;
                homeTotals.flson += playerStats.stats[i].flson;
                homeTotals.plusminus += playerStats.stats[i].plusMinus;
            }
           
        };

        //calculate home percentages
        if(homeTotals.fga == 0){
            homeTotals.fgp = 0;
        }
        else{
            homeTotals.fgp = ((homeTotals.fgm/homeTotals.fga)*100).toFixed(2);
        }
        if(homeTotals.twopta == 0){
            homeTotals.twoptp = 0;
        }
        else{
            homeTotals.twoptp = ((homeTotals.twoptm/homeTotals.twopta)*100).toFixed(2);
        }
        if(homeTotals.threepta == 0){
            homeTotals.threeptp = 0;
        }
        else{
            homeTotals.threeptp = ((homeTotals.threeptm/homeTotals.threepta)*100).toFixed(2);
        }
        if(homeTotals.fta == 0){
            homeTotals.ftp = 0;
        }
        else{
            homeTotals.ftp = ((homeTotals.ftm/homeTotals.fta)*100).toFixed(2);
        }

        playerStats.homeTotals = [];
        playerStats.homeTotals.push(homeTotals);
        // console.log("homeTotals", playerStats.homeTotals);
        

        //calculate home averages
        var homeAverages = {};
        if(gamesPlayed == 0){
            homeAverages = homeTotals;
        }
        else{
            homeAverages.mins = ( homeTotals.mins/playerStats.homeGames.length).toFixed(2);
            homeAverages.pts = ( homeTotals.pts/playerStats.homeGames.length).toFixed(2);
            homeAverages.fgm = ( homeTotals.fgm/playerStats.homeGames.length).toFixed(2);
            homeAverages.fga = ( homeTotals.fga/playerStats.homeGames.length).toFixed(2);
            homeAverages.twoptm = ( homeTotals.twoptm/playerStats.homeGames.length).toFixed(2);
            homeAverages.twopta = ( homeTotals.twopta/playerStats.homeGames.length).toFixed(2);
            homeAverages.threeptm = ( homeTotals.threeptm/playerStats.homeGames.length).toFixed(2);
            homeAverages.threepta = ( homeTotals.threepta/playerStats.homeGames.length).toFixed(2);
            homeAverages.ftm = ( homeTotals.ftm/playerStats.homeGames.length).toFixed(2);
            homeAverages.fta = ( homeTotals.fta/playerStats.homeGames.length).toFixed(2);
            homeAverages.oreb = ( homeTotals.oreb/playerStats.homeGames.length).toFixed(2);
            homeAverages.dreb = ( homeTotals.dreb/playerStats.homeGames.length).toFixed(2);
            homeAverages.reb = (parseFloat(homeAverages.oreb) + parseFloat(homeAverages.dreb)).toFixed(2);
            homeAverages.ast = ( homeTotals.ast/playerStats.homeGames.length).toFixed(2);
            homeAverages.to = ( homeTotals.to/playerStats.homeGames.length).toFixed(2);
            homeAverages.stl = ( homeTotals.stl/playerStats.homeGames.length).toFixed(2);
            homeAverages.blk = ( homeTotals.blk/playerStats.homeGames.length).toFixed(2);
            homeAverages.blkr = ( homeTotals.blkr/playerStats.homeGames.length).toFixed(2);
            homeAverages.pf = ( homeTotals.pf/playerStats.homeGames.length).toFixed(2);
            homeAverages.flson = ( homeTotals.flson/playerStats.homeGames.length).toFixed(2);
            homeAverages.plusminus = (homeTotals.plusminus/playerStats.homeGames.length).toFixed(2);

        }

        playerStats.homeAverages = []
        playerStats.homeAverages.push(homeAverages);
        // console.log("homeAverages", playerStats.homeAverages);

        /////////////////////// AWAY STATS /////////////////////////////

        //initialize away stats to 0
        var awayTotals = {};
        awayTotals.mins,awayTotals.pts,awayTotals.fgm,awayTotals.fga,awayTotals.twoptm,awayTotals.twopta,awayTotals.threeptm,awayTotals.threepta,awayTotals.ftm,awayTotals.fta,awayTotals.oreb,awayTotals.dreb,awayTotals.reb,awayTotals.ast,awayTotals.to,awayTotals.stl,awayTotals.blk,awayTotals.blkr,awayTotals.pf,awayTotals.flson,awayTotals.plusminus;

        awayTotals.mins = 0;
        awayTotals.pts=awayTotals.fgm=awayTotals.fga=awayTotals.twoptm=awayTotals.twopta=awayTotals.threeptm=awayTotals.threepta=awayTotals.ftm=awayTotals.fta=awayTotals.oreb=awayTotals.dreb=awayTotals.reb=awayTotals.ast=awayTotals.to=awayTotals.stl=awayTotals.blk=awayTotals.blkr=awayTotals.pf=awayTotals.flson=awayTotals.plusminus=awayTotals.mins;

        var gamesPlayed;
        if(playerStats.stats == null){
            gamesPlayed = 0;
        }
        else{
            gamesPlayed = playerStats.stats.length;
        }

        var i;
        for(i=0; i < gamesPlayed; i++){
            if(playerStats.stats[i].location == "A"){
                awayTotals.mins += playerStats.stats[i].mins;
                awayTotals.pts += playerStats.stats[i].pts;
                awayTotals.fgm += playerStats.stats[i].fgm;
                awayTotals.fga += playerStats.stats[i].fga;
                awayTotals.twoptm += playerStats.stats[i].twoptm;
                awayTotals.twopta += playerStats.stats[i].twopta;
                awayTotals.threeptm += playerStats.stats[i].threeptm;
                awayTotals.threepta += playerStats.stats[i].threepta;
                awayTotals.ftm += playerStats.stats[i].ftm;
                awayTotals.fta += playerStats.stats[i].fta;
                awayTotals.oreb += playerStats.stats[i].oreb;
                awayTotals.dreb += playerStats.stats[i].dreb;
                awayTotals.reb += (playerStats.stats[i].oreb+playerStats.stats[i].dreb);
                awayTotals.ast += playerStats.stats[i].ast;
                awayTotals.to += playerStats.stats[i].to;
                awayTotals.stl += playerStats.stats[i].stl;
                awayTotals.blk += playerStats.stats[i].blk;
                awayTotals.blkr += playerStats.stats[i].blkr;
                awayTotals.pf += playerStats.stats[i].pf;
                awayTotals.flson += playerStats.stats[i].flson;
                awayTotals.plusminus += playerStats.stats[i].plusMinus;
            }
           
        };

        //calculate away percentages
        if(awayTotals.fga == 0){
            awayTotals.fgp = 0;
        }
        else{
            awayTotals.fgp = ((awayTotals.fgm/awayTotals.fga)*100).toFixed(2);
        }
        if(awayTotals.twopta == 0){
            awayTotals.twoptp = 0;
        }
        else{
            awayTotals.twoptp = ((awayTotals.twoptm/awayTotals.twopta)*100).toFixed(2);
        }
        if(awayTotals.threepta == 0){
            awayTotals.threeptp = 0;
        }
        else{
            awayTotals.threeptp = ((awayTotals.threeptm/awayTotals.threepta)*100).toFixed(2);
        }
        if(awayTotals.fta == 0){
            awayTotals.ftp = 0;
        }
        else{
            awayTotals.ftp = ((awayTotals.ftm/awayTotals.fta)*100).toFixed(2);
        }

        playerStats.awayTotals = [];
        playerStats.awayTotals.push(awayTotals);
        // console.log("awayTotals", playerStats.awayTotals);
        

        //calculate away averages
        var awayAverages = {};
        if(gamesPlayed == 0){
            awayAverages = awayTotals;
        }
        else{
            awayAverages.mins = ( awayTotals.mins/playerStats.awayGames.length).toFixed(2);
            awayAverages.pts = ( awayTotals.pts/playerStats.awayGames.length).toFixed(2);
            awayAverages.fgm = ( awayTotals.fgm/playerStats.awayGames.length).toFixed(2);
            awayAverages.fga = ( awayTotals.fga/playerStats.awayGames.length).toFixed(2);
            awayAverages.twoptm = ( awayTotals.twoptm/playerStats.awayGames.length).toFixed(2);
            awayAverages.twopta = ( awayTotals.twopta/playerStats.awayGames.length).toFixed(2);
            awayAverages.threeptm = ( awayTotals.threeptm/playerStats.awayGames.length).toFixed(2);
            awayAverages.threepta = ( awayTotals.threepta/playerStats.awayGames.length).toFixed(2);
            awayAverages.ftm = ( awayTotals.ftm/playerStats.awayGames.length).toFixed(2);
            awayAverages.fta = ( awayTotals.fta/playerStats.awayGames.length).toFixed(2);
            awayAverages.oreb = ( awayTotals.oreb/playerStats.awayGames.length).toFixed(2);
            awayAverages.dreb = ( awayTotals.dreb/playerStats.awayGames.length).toFixed(2);
            awayAverages.reb = (parseFloat(awayAverages.oreb) + parseFloat(awayAverages.dreb)).toFixed(2);
            awayAverages.ast = ( awayTotals.ast/playerStats.awayGames.length).toFixed(2);
            awayAverages.to = ( awayTotals.to/playerStats.awayGames.length).toFixed(2);
            awayAverages.stl = ( awayTotals.stl/playerStats.awayGames.length).toFixed(2);
            awayAverages.blk = ( awayTotals.blk/playerStats.awayGames.length).toFixed(2);
            awayAverages.blkr = ( awayTotals.blkr/playerStats.awayGames.length).toFixed(2);
            awayAverages.pf = ( awayTotals.pf/playerStats.awayGames.length).toFixed(2);
            awayAverages.flson = ( awayTotals.flson/playerStats.awayGames.length).toFixed(2);
            awayAverages.plusminus = (awayTotals.plusminus/playerStats.awayGames.length).toFixed(2);

        }

        playerStats.awayAverages = []
        playerStats.awayAverages.push(awayAverages);
        // console.log("awayAverages", playerStats.awayAverages);


         /////////////////////// STATS IN WINS /////////////////////////////

        //initialize away stats to 0
        var winTotals = {};
        winTotals.mins,winTotals.pts,winTotals.fgm,winTotals.fga,winTotals.twoptm,winTotals.twopta,winTotals.threeptm,winTotals.threepta,winTotals.ftm,winTotals.fta,winTotals.oreb,winTotals.dreb,winTotals.reb,winTotals.ast,winTotals.to,winTotals.stl,winTotals.blk,winTotals.blkr,winTotals.pf,winTotals.flson,winTotals.plusminus;

        winTotals.mins = 0;
        winTotals.pts=winTotals.fgm=winTotals.fga=winTotals.twoptm=winTotals.twopta=winTotals.threeptm=winTotals.threepta=winTotals.ftm=winTotals.fta=winTotals.oreb=winTotals.dreb=winTotals.reb=winTotals.ast=winTotals.to=winTotals.stl=winTotals.blk=winTotals.blkr=winTotals.pf=winTotals.flson=winTotals.plusminus=winTotals.mins;

        var i;
        for(i=0; i < gamesPlayed; i++){
            if(playerStats.stats[i].result == "W"){
                winTotals.mins += playerStats.stats[i].mins;
                winTotals.pts += playerStats.stats[i].pts;
                winTotals.fgm += playerStats.stats[i].fgm;
                winTotals.fga += playerStats.stats[i].fga;
                winTotals.twoptm += playerStats.stats[i].twoptm;
                winTotals.twopta += playerStats.stats[i].twopta;
                winTotals.threeptm += playerStats.stats[i].threeptm;
                winTotals.threepta += playerStats.stats[i].threepta;
                winTotals.ftm += playerStats.stats[i].ftm;
                winTotals.fta += playerStats.stats[i].fta;
                winTotals.oreb += playerStats.stats[i].oreb;
                winTotals.dreb += playerStats.stats[i].dreb;
                winTotals.reb += (playerStats.stats[i].oreb+playerStats.stats[i].dreb);
                winTotals.ast += playerStats.stats[i].ast;
                winTotals.to += playerStats.stats[i].to;
                winTotals.stl += playerStats.stats[i].stl;
                winTotals.blk += playerStats.stats[i].blk;
                winTotals.blkr += playerStats.stats[i].blkr;
                winTotals.pf += playerStats.stats[i].pf;
                winTotals.flson += playerStats.stats[i].flson;
                winTotals.plusminus += playerStats.stats[i].plusMinus;
            }
           
        };

        //calculate away percentages
        if(winTotals.fga == 0){
            winTotals.fgp = 0;
        }
        else{
            winTotals.fgp = ((winTotals.fgm/winTotals.fga)*100).toFixed(2);
        }
        if(winTotals.twopta == 0){
            winTotals.twoptp = 0;
        }
        else{
            winTotals.twoptp = ((winTotals.twoptm/winTotals.twopta)*100).toFixed(2);
        }
        if(winTotals.threepta == 0){
            winTotals.threeptp = 0;
        }
        else{
            winTotals.threeptp = ((winTotals.threeptm/winTotals.threepta)*100).toFixed(2);
        }
        if(winTotals.fta == 0){
            winTotals.ftp = 0;
        }
        else{
            winTotals.ftp = ((winTotals.ftm/winTotals.fta)*100).toFixed(2);
        }

        playerStats.winTotals = [];
        playerStats.winTotals.push(winTotals);
        // console.log("winTotals", playerStats.winTotals);
        

        //calculate win averages
        var winAverages = {};
        if(gamesPlayed == 0){
            winAverages = winTotals;
        }
        else{
            winAverages.mins = ( winTotals.mins/playerStats.wins.length).toFixed(2);
            winAverages.pts = ( winTotals.pts/playerStats.wins.length).toFixed(2);
            winAverages.fgm = ( winTotals.fgm/playerStats.wins.length).toFixed(2);
            winAverages.fga = ( winTotals.fga/playerStats.wins.length).toFixed(2);
            winAverages.twoptm = ( winTotals.twoptm/playerStats.wins.length).toFixed(2);
            winAverages.twopta = ( winTotals.twopta/playerStats.wins.length).toFixed(2);
            winAverages.threeptm = ( winTotals.threeptm/playerStats.wins.length).toFixed(2);
            winAverages.threepta = ( winTotals.threepta/playerStats.wins.length).toFixed(2);
            winAverages.ftm = ( winTotals.ftm/playerStats.wins.length).toFixed(2);
            winAverages.fta = ( winTotals.fta/playerStats.wins.length).toFixed(2);
            winAverages.oreb = ( winTotals.oreb/playerStats.wins.length).toFixed(2);
            winAverages.dreb = ( winTotals.dreb/playerStats.wins.length).toFixed(2);
            winAverages.reb = (parseFloat(winAverages.oreb) + parseFloat(winAverages.dreb)).toFixed(2);
            winAverages.ast = ( winTotals.ast/playerStats.wins.length).toFixed(2);
            winAverages.to = ( winTotals.to/playerStats.wins.length).toFixed(2);
            winAverages.stl = ( winTotals.stl/playerStats.wins.length).toFixed(2);
            winAverages.blk = ( winTotals.blk/playerStats.wins.length).toFixed(2);
            winAverages.blkr = ( winTotals.blkr/playerStats.wins.length).toFixed(2);
            winAverages.pf = ( winTotals.pf/playerStats.wins.length).toFixed(2);
            winAverages.flson = ( winTotals.flson/playerStats.wins.length).toFixed(2);
            winAverages.plusminus = (winTotals.plusminus/playerStats.wins.length).toFixed(2);

        }

        playerStats.winAverages = []
        playerStats.winAverages.push(winAverages);
        // console.log("winAverages", playerStats.winAverages);

         /////////////////////// STATS IN LOSSES /////////////////////////////

        //initialize away stats to 0
        var lossTotals = {};
        lossTotals.mins,lossTotals.pts,lossTotals.fgm,lossTotals.fga,lossTotals.twoptm,lossTotals.twopta,lossTotals.threeptm,lossTotals.threepta,lossTotals.ftm,lossTotals.fta,lossTotals.oreb,lossTotals.dreb,lossTotals.reb,lossTotals.ast,lossTotals.to,lossTotals.stl,lossTotals.blk,lossTotals.blkr,lossTotals.pf,lossTotals.flson,lossTotals.plusminus;

        lossTotals.mins = 0;
        lossTotals.pts=lossTotals.fgm=lossTotals.fga=lossTotals.twoptm=lossTotals.twopta=lossTotals.threeptm=lossTotals.threepta=lossTotals.ftm=lossTotals.fta=lossTotals.oreb=lossTotals.dreb=lossTotals.reb=lossTotals.ast=lossTotals.to=lossTotals.stl=lossTotals.blk=lossTotals.blkr=lossTotals.pf=lossTotals.flson=lossTotals.plusminus=lossTotals.mins;

        var gamesPlayed;
        if(playerStats.stats == null){
            gamesPlayed = 0;
        }
        else{
            gamesPlayed = playerStats.stats.length;
        }

        var i;
        for(i=0; i < gamesPlayed; i++){
            if(playerStats.stats[i].result == "L"){
                lossTotals.mins += playerStats.stats[i].mins;
                lossTotals.pts += playerStats.stats[i].pts;
                lossTotals.fgm += playerStats.stats[i].fgm;
                lossTotals.fga += playerStats.stats[i].fga;
                lossTotals.twoptm += playerStats.stats[i].twoptm;
                lossTotals.twopta += playerStats.stats[i].twopta;
                lossTotals.threeptm += playerStats.stats[i].threeptm;
                lossTotals.threepta += playerStats.stats[i].threepta;
                lossTotals.ftm += playerStats.stats[i].ftm;
                lossTotals.fta += playerStats.stats[i].fta;
                lossTotals.oreb += playerStats.stats[i].oreb;
                lossTotals.dreb += playerStats.stats[i].dreb;
                lossTotals.reb += (playerStats.stats[i].oreb+playerStats.stats[i].dreb);
                lossTotals.ast += playerStats.stats[i].ast;
                lossTotals.to += playerStats.stats[i].to;
                lossTotals.stl += playerStats.stats[i].stl;
                lossTotals.blk += playerStats.stats[i].blk;
                lossTotals.blkr += playerStats.stats[i].blkr;
                lossTotals.pf += playerStats.stats[i].pf;
                lossTotals.flson += playerStats.stats[i].flson;
                lossTotals.plusminus += playerStats.stats[i].plusMinus;
            }
           
        };

        //calculate away percentages
        if(lossTotals.fga == 0){
            lossTotals.fgp = 0;
        }
        else{
            lossTotals.fgp = ((lossTotals.fgm/lossTotals.fga)*100).toFixed(2);
        }
        if(lossTotals.twopta == 0){
            lossTotals.twoptp = 0;
        }
        else{
            lossTotals.twoptp = ((lossTotals.twoptm/lossTotals.twopta)*100).toFixed(2);
        }
        if(lossTotals.threepta == 0){
            lossTotals.threeptp = 0;
        }
        else{
            lossTotals.threeptp = ((lossTotals.threeptm/lossTotals.threepta)*100).toFixed(2);
        }
        if(lossTotals.fta == 0){
            lossTotals.ftp = 0;
        }
        else{
            lossTotals.ftp = ((lossTotals.ftm/lossTotals.fta)*100).toFixed(2);
        }

        playerStats.lossTotals = [];
        playerStats.lossTotals.push(lossTotals);
        // console.log("lossTotals", playerStats.lossTotals);
        

        //calculate loss averages
        var lossAverages = {};
        if(gamesPlayed == 0){
            lossAverages = lossTotals;
        }
        else{
            lossAverages.mins = ( lossTotals.mins/playerStats.losses.length).toFixed(2);
            lossAverages.pts = ( lossTotals.pts/playerStats.losses.length).toFixed(2);
            lossAverages.fgm = ( lossTotals.fgm/playerStats.losses.length).toFixed(2);
            lossAverages.fga = ( lossTotals.fga/playerStats.losses.length).toFixed(2);
            lossAverages.twoptm = ( lossTotals.twoptm/playerStats.losses.length).toFixed(2);
            lossAverages.twopta = ( lossTotals.twopta/playerStats.losses.length).toFixed(2);
            lossAverages.threeptm = ( lossTotals.threeptm/playerStats.losses.length).toFixed(2);
            lossAverages.threepta = ( lossTotals.threepta/playerStats.losses.length).toFixed(2);
            lossAverages.ftm = ( lossTotals.ftm/playerStats.losses.length).toFixed(2);
            lossAverages.fta = ( lossTotals.fta/playerStats.losses.length).toFixed(2);
            lossAverages.oreb = ( lossTotals.oreb/playerStats.losses.length).toFixed(2);
            lossAverages.dreb = ( lossTotals.dreb/playerStats.losses.length).toFixed(2);
            lossAverages.reb = (parseFloat(lossAverages.oreb) + parseFloat(lossAverages.dreb)).toFixed(2);
            lossAverages.ast = ( lossTotals.ast/playerStats.losses.length).toFixed(2);
            lossAverages.to = ( lossTotals.to/playerStats.losses.length).toFixed(2);
            lossAverages.stl = ( lossTotals.stl/playerStats.losses.length).toFixed(2);
            lossAverages.blk = ( lossTotals.blk/playerStats.losses.length).toFixed(2);
            lossAverages.blkr = ( lossTotals.blkr/playerStats.losses.length).toFixed(2);
            lossAverages.pf = ( lossTotals.pf/playerStats.losses.length).toFixed(2);
            lossAverages.flson = ( lossTotals.flson/playerStats.losses.length).toFixed(2);
            lossAverages.plusminus = (lossTotals.plusminus/playerStats.losses.length).toFixed(2);

        }

        playerStats.lossAverages = []
        playerStats.lossAverages.push(lossAverages);
        // console.log("lossAverages", playerStats.lossAverages);
        
    }
    
})();