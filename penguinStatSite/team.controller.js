(function () {
    'use strict';
    
    angular.module('StatApp')
    .controller('TeamController', TeamController);    
    
    TeamController.$inject = ['TeamDataService', 'games', 'ourStats'];
    function TeamController(TeamDataService, games, ourStats) {
      var gameList = this;
      gameList.games = games;
      gameList.ourStats = ourStats;

      console.log("gameList", gameList.games);
      console.log("ourstats", gameList.ourStats);

      //calculate totals for us and them

      //---------their stats-----------
      var oppTotals = {};
      oppTotals.pts,oppTotals.fga, oppTotals.twoptm, oppTotals.twopta, oppTotals.threeptm, oppTotals.threepta, oppTotals.ftm, oppTotals.fta, oppTotals.oreb, oppTotals.reb, oppTotals.ast, oppTotals.stl,oppTotals.blk,oppTotals.to,oppTotals.pf,oppTotals.pip,oppTotals.scp,oppTotals.pft,oppTotals.fbp,oppTotals.bp;
      
      oppTotals.fgm = 0;
      oppTotals.pts=oppTotals.fga= oppTotals.twoptm= oppTotals.twopta= oppTotals.threeptm= oppTotals.threepta= oppTotals.ftm= oppTotals.fta= oppTotals.oreb= oppTotals.reb= oppTotals.ast= oppTotals.stl=oppTotals.blk=oppTotals.to=oppTotals.pf=oppTotals.pip=oppTotals.scp=oppTotals.pft=oppTotals.fbp=oppTotals.bp=oppTotals.fgm;

      var gamesPlayed = gameList.games.length;

      var i;
      for(i=0; i < gamesPlayed; i++){
        oppTotals.pts += gameList.games[i].pts;
        oppTotals.fgm += gameList.games[i].fgm;
        oppTotals.fga += gameList.games[i].fga;
        oppTotals.twoptm += gameList.games[i].twoptm;
        oppTotals.twopta += gameList.games[i].twopta;
        oppTotals.threeptm += gameList.games[i].threeptm;
        oppTotals.threepta += gameList.games[i].threepta;
        oppTotals.ftm += gameList.games[i].ftm;
        oppTotals.fta += gameList.games[i].fta;
        oppTotals.oreb += gameList.games[i].oreb;
        oppTotals.reb += gameList.games[i].reb;
        oppTotals.ast += gameList.games[i].ast;
        oppTotals.stl += gameList.games[i].stl;
        oppTotals.blk += gameList.games[i].blk;
        oppTotals.to += gameList.games[i].to;
        oppTotals.pf += gameList.games[i].pf;
        oppTotals.pip += gameList.games[i].pip;
        oppTotals.scp += gameList.games[i].scp;
        oppTotals.pft += gameList.games[i].pft;
        oppTotals.fbp += gameList.games[i].fbp;
        oppTotals.bp += gameList.games[i].bp;
      }
      //percentages
      oppTotals.fgp = ((oppTotals.fgm/oppTotals.fga) * 100).toFixed(2);
      oppTotals.twoptp = ((oppTotals.twoptm/oppTotals.twopta) * 100).toFixed(2);
      oppTotals.threeptp = ((oppTotals.threeptm/oppTotals.threepta) * 100).toFixed(2);
      oppTotals.ftp = ((oppTotals.ftm/oppTotals.fta) * 100).toFixed(2);
      console.log("fgp", oppTotals.fgp);

      gameList.oppTotals = oppTotals;
      console.log("oppTotals", gameList.oppTotals);

      //calculate averages
      var oppAverages = {};
      oppAverages.pts = ( oppTotals.pts/gamesPlayed).toFixed(2);
      oppAverages.fgm = ( oppTotals.fgm/gamesPlayed).toFixed(2);
      oppAverages.fga = ( oppTotals.fga/gamesPlayed).toFixed(2);
      oppAverages.twoptm = ( oppTotals.twoptm/gamesPlayed).toFixed(2);
      oppAverages.twopta = ( oppTotals.twopta/gamesPlayed).toFixed(2);
      oppAverages.threeptm = ( oppTotals.threeptm/gamesPlayed).toFixed(2);
      oppAverages.threepta = ( oppTotals.threepta/gamesPlayed).toFixed(2);
      oppAverages.ftm = ( oppTotals.ftm/gamesPlayed).toFixed(2);
      oppAverages.fta = ( oppTotals.fta/gamesPlayed).toFixed(2);
      oppAverages.oreb = ( oppTotals.oreb/gamesPlayed).toFixed(2);
      oppAverages.reb = ( oppTotals.reb/gamesPlayed).toFixed(2);
      oppAverages.ast = ( oppTotals.ast/gamesPlayed).toFixed(2);
      oppAverages.stl = ( oppTotals.stl/gamesPlayed).toFixed(2);
      oppAverages.blk = ( oppTotals.blk/gamesPlayed).toFixed(2);
      oppAverages.to = ( oppTotals.to/gamesPlayed).toFixed(2);
      oppAverages.pf = ( oppTotals.pf/gamesPlayed).toFixed(2);
      oppAverages.pip = ( oppTotals.pip/gamesPlayed).toFixed(2);
      oppAverages.scp = ( oppTotals.scp/gamesPlayed).toFixed(2);
      oppAverages.pft = (oppTotals.pft/gamesPlayed).toFixed(2);
      oppAverages.fbp = (oppTotals.fbp/gamesPlayed).toFixed(2);
      oppAverages.bp = (oppTotals.bp/gamesPlayed).toFixed(2);

      gameList.oppAverages = oppAverages;
      console.log("oppAverages", gameList.oppAverages);

      //--------------------ourstats----------------

      var ourTotals = {};
      ourTotals.pts,ourTotals.fga, ourTotals.twoptm, ourTotals.twopta, ourTotals.threeptm, ourTotals.threepta, ourTotals.ftm, ourTotals.fta, ourTotals.oreb, ourTotals.reb, ourTotals.ast, ourTotals.stl,ourTotals.blk,ourTotals.to,ourTotals.pf,ourTotals.pip,ourTotals.scp,ourTotals.pft,ourTotals.fbp,ourTotals.bp;
      
      ourTotals.fgm = 0;
      ourTotals.pts = ourTotals.fga= ourTotals.twoptm= ourTotals.twopta= ourTotals.threeptm= ourTotals.threepta= ourTotals.ftm= ourTotals.fta= ourTotals.oreb= ourTotals.reb= ourTotals.ast= ourTotals.stl=ourTotals.blk=ourTotals.to=ourTotals.pf=ourTotals.pip=ourTotals.scp=ourTotals.pft=ourTotals.fbp=ourTotals.bp=ourTotals.fgm;


      var i;
      for(i=0; i < gamesPlayed; i++){
        ourTotals.pts += gameList.ourStats[i].pts;
        ourTotals.fgm += gameList.ourStats[i].fgm;
        ourTotals.fga += gameList.ourStats[i].fga;
        ourTotals.twoptm += gameList.ourStats[i].twoptm;
        ourTotals.twopta += gameList.ourStats[i].twopta;
        ourTotals.threeptm += gameList.ourStats[i].threeptm;
        ourTotals.threepta += gameList.ourStats[i].threepta;
        ourTotals.ftm += gameList.ourStats[i].ftm;
        ourTotals.fta += gameList.ourStats[i].fta;
        ourTotals.oreb += gameList.ourStats[i].oreb;
        ourTotals.reb += gameList.ourStats[i].reb;
        ourTotals.ast += gameList.ourStats[i].ast;
        ourTotals.stl += gameList.ourStats[i].stl;
        ourTotals.blk += gameList.ourStats[i].blk;
        ourTotals.to += gameList.ourStats[i].to;
        ourTotals.pf += gameList.ourStats[i].pf;
        ourTotals.pip += gameList.ourStats[i].pip;
        ourTotals.scp += gameList.ourStats[i].scp;
        ourTotals.pft += gameList.ourStats[i].pft;
        ourTotals.fbp += gameList.ourStats[i].fbp;
        ourTotals.bp += gameList.ourStats[i].bp;
      }

      //percentages
      ourTotals.fgp = ((ourTotals.fgm/ourTotals.fga) * 100).toFixed(2);
      ourTotals.twoptp = ((ourTotals.twoptm/ourTotals.twopta) * 100).toFixed(2);
      ourTotals.threeptp = ((ourTotals.threeptm/ourTotals.threepta) * 100).toFixed(2);
      ourTotals.ftp = ((ourTotals.ftm/ourTotals.fta) * 100).toFixed(2);

      gameList.ourTotals = ourTotals;
      console.log("ourTotals", gameList.ourTotals);

      //calculate averages
      var ourAverages = {};
      ourAverages.pts = ( ourTotals.pts/gamesPlayed).toFixed(2);
      ourAverages.fgm = ( ourTotals.fgm/gamesPlayed).toFixed(2);
      ourAverages.fga = ( ourTotals.fga/gamesPlayed).toFixed(2);
      ourAverages.twoptm = ( ourTotals.twoptm/gamesPlayed).toFixed(2);
      ourAverages.twopta = ( ourTotals.twopta/gamesPlayed).toFixed(2);
      ourAverages.threeptm = ( ourTotals.threeptm/gamesPlayed).toFixed(2);
      ourAverages.threepta = ( ourTotals.threepta/gamesPlayed).toFixed(2);
      ourAverages.ftm = ( ourTotals.ftm/gamesPlayed).toFixed(2);
      ourAverages.fta = ( ourTotals.fta/gamesPlayed).toFixed(2);
      ourAverages.oreb = ( ourTotals.oreb/gamesPlayed).toFixed(2);
      ourAverages.reb = ( ourTotals.reb/gamesPlayed).toFixed(2);
      ourAverages.ast = ( ourTotals.ast/gamesPlayed).toFixed(2);
      ourAverages.stl = ( ourTotals.stl/gamesPlayed).toFixed(2);
      ourAverages.blk = ( ourTotals.blk/gamesPlayed).toFixed(2);
      ourAverages.to = ( ourTotals.to/gamesPlayed).toFixed(2);
      ourAverages.pf = ( ourTotals.pf/gamesPlayed).toFixed(2);
      ourAverages.pip = ( ourTotals.pip/gamesPlayed).toFixed(2);
      ourAverages.scp = ( ourTotals.scp/gamesPlayed).toFixed(2);
      ourAverages.pft = (ourTotals.pft/gamesPlayed).toFixed(2);
      ourAverages.fbp = (ourTotals.fbp/gamesPlayed).toFixed(2);
      ourAverages.bp = (ourTotals.bp/gamesPlayed).toFixed(2);

      gameList.ourAverages = ourAverages;
      console.log("ourAverages", gameList.ourAverages);

    }
    
})();