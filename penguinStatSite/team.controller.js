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

        //games = opponent stats
      //ourStats = our stats
      
      var gamesPlayed = gameList.games.length;

      //separate our home, away, losses and losses stats
      gameList.homeGames = [];
      gameList.awayGames = [];
      gameList.wins = [];
      gameList.losses = [];

      //opponent separation 
      gameList.oHomeGames = [];
      gameList.oAwayGames = [];
      gameList.oWins = [];
      gameList.oLosses = [];

      var i;
      for(i=0; i < gamesPlayed; i++){
        var currGame = gameList.ourStats[i];

        if(currGame.location == "H"){
          gameList.homeGames.push(currGame);
        }

        if(currGame.location == "A"){
          gameList.awayGames.push(currGame);
        }

        if(currGame.result == "W"){
          gameList.wins.push(currGame);
        }

        if(currGame.result == "L"){
          gameList.losses.push(currGame);
        }
      }

      var i;
      for(i=0; i < gamesPlayed; i++){
        var currGame = gameList.games[i];

        if(currGame.location == "H"){
          gameList.oHomeGames.push(currGame);
        }

        if(currGame.location == "A"){
          gameList.oAwayGames.push(currGame);
        }

        if(currGame.result == "W"){
          gameList.oWins.push(currGame);
        }

        if(currGame.result == "L"){
          gameList.oLosses.push(currGame);
        }
      }
    
      console.log("homeGames", gameList.homeGames);
      console.log("ohomeGames", gameList.oHomeGames);
      // console.log("away", gameList.awayGames);
      // console.log("wins", gameList.wins);
      // console.log("losses", gameList.losses);




      //calculate totals for us and them

      //---------their stats-----------
      var oppTotals = {};
      oppTotals.pts,oppTotals.fga, oppTotals.twoptm, oppTotals.twopta, oppTotals.threeptm, oppTotals.threepta, oppTotals.ftm, oppTotals.fta, oppTotals.oreb, oppTotals.reb, oppTotals.ast, oppTotals.stl,oppTotals.blk,oppTotals.to,oppTotals.pf,oppTotals.pip,oppTotals.scp,oppTotals.pft,oppTotals.fbp,oppTotals.bp;
      
      oppTotals.fgm = 0;
      oppTotals.pts=oppTotals.fga= oppTotals.twoptm= oppTotals.twopta= oppTotals.threeptm= oppTotals.threepta= oppTotals.ftm= oppTotals.fta= oppTotals.oreb= oppTotals.reb= oppTotals.ast= oppTotals.stl=oppTotals.blk=oppTotals.to=oppTotals.pf=oppTotals.pip=oppTotals.scp=oppTotals.pft=oppTotals.fbp=oppTotals.bp=oppTotals.fgm;

      

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
      // console.log("fgp", oppTotals.fgp);

      gameList.oppTotals = oppTotals;
      // console.log("oppTotals", gameList.oppTotals);

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
      // console.log("oppAverages", gameList.oppAverages);

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
      // console.log("ourTotals", gameList.ourTotals);

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
      // console.log("ourAverages", gameList.ourAverages);

      //---------HOME stats-----------

      //opponent home totals
      var oppHomeTotals = {};
      oppHomeTotals.pts,oppHomeTotals.fga, oppHomeTotals.twoptm, oppHomeTotals.twopta, oppHomeTotals.threeptm, oppHomeTotals.threepta, oppHomeTotals.ftm, oppHomeTotals.fta, oppHomeTotals.oreb, oppHomeTotals.reb, oppHomeTotals.ast, oppHomeTotals.stl,oppHomeTotals.blk,oppHomeTotals.to,oppHomeTotals.pf,oppHomeTotals.pip,oppHomeTotals.scp,oppHomeTotals.pft,oppHomeTotals.fbp,oppHomeTotals.bp;
      
      oppHomeTotals.fgm = 0;
      oppHomeTotals.pts=oppHomeTotals.fga= oppHomeTotals.twoptm= oppHomeTotals.twopta= oppHomeTotals.threeptm= oppHomeTotals.threepta= oppHomeTotals.ftm= oppHomeTotals.fta= oppHomeTotals.oreb= oppHomeTotals.reb= oppHomeTotals.ast= oppHomeTotals.stl=oppHomeTotals.blk=oppHomeTotals.to=oppHomeTotals.pf=oppHomeTotals.pip=oppHomeTotals.scp=oppHomeTotals.pft=oppHomeTotals.fbp=oppHomeTotals.bp=oppHomeTotals.fgm;

      //our home totals
      var ourHomeTotals = {};
      ourHomeTotals.pts,ourHomeTotals.fga, ourHomeTotals.twoptm, ourHomeTotals.twopta, ourHomeTotals.threeptm, ourHomeTotals.threepta, ourHomeTotals.ftm, ourHomeTotals.fta, ourHomeTotals.oreb, ourHomeTotals.reb, ourHomeTotals.ast, ourHomeTotals.stl,ourHomeTotals.blk,ourHomeTotals.to,ourHomeTotals.pf,ourHomeTotals.pip,ourHomeTotals.scp,ourHomeTotals.pft,ourHomeTotals.fbp,ourHomeTotals.bp;
      
      ourHomeTotals.fgm = 0;
      ourHomeTotals.pts=ourHomeTotals.fga= ourHomeTotals.twoptm= ourHomeTotals.twopta= ourHomeTotals.threeptm= ourHomeTotals.threepta= ourHomeTotals.ftm= ourHomeTotals.fta= ourHomeTotals.oreb= ourHomeTotals.reb= ourHomeTotals.ast= ourHomeTotals.stl=ourHomeTotals.blk=ourHomeTotals.to=ourHomeTotals.pf=ourHomeTotals.pip=ourHomeTotals.scp=ourHomeTotals.pft=ourHomeTotals.fbp=ourHomeTotals.bp=ourHomeTotals.fgm;

      

      var i;
      for(i=0; i < gameList.homeGames.length; i++){
        //opponents
        oppHomeTotals.pts += gameList.oHomeGames[i].pts;
        oppHomeTotals.fgm += gameList.oHomeGames[i].fgm;
        oppHomeTotals.fga += gameList.oHomeGames[i].fga;
        oppHomeTotals.twoptm += gameList.oHomeGames[i].twoptm;
        oppHomeTotals.twopta += gameList.oHomeGames[i].twopta;
        oppHomeTotals.threeptm += gameList.oHomeGames[i].threeptm;
        oppHomeTotals.threepta += gameList.oHomeGames[i].threepta;
        oppHomeTotals.ftm += gameList.oHomeGames[i].ftm;
        oppHomeTotals.fta += gameList.oHomeGames[i].fta;
        oppHomeTotals.oreb += gameList.oHomeGames[i].oreb;
        oppHomeTotals.reb += gameList.oHomeGames[i].reb;
        oppHomeTotals.ast += gameList.oHomeGames[i].ast;
        oppHomeTotals.stl += gameList.oHomeGames[i].stl;
        oppHomeTotals.blk += gameList.oHomeGames[i].blk;
        oppHomeTotals.to += gameList.oHomeGames[i].to;
        oppHomeTotals.pf += gameList.oHomeGames[i].pf;
        oppHomeTotals.pip += gameList.oHomeGames[i].pip;
        oppHomeTotals.scp += gameList.oHomeGames[i].scp;
        oppHomeTotals.pft += gameList.oHomeGames[i].pft;
        oppHomeTotals.fbp += gameList.oHomeGames[i].fbp;
        oppHomeTotals.bp += gameList.oHomeGames[i].bp;

        //us
        ourHomeTotals.pts += gameList.homeGames[i].pts;
        ourHomeTotals.fgm += gameList.homeGames[i].fgm;
        ourHomeTotals.fga += gameList.homeGames[i].fga;
        ourHomeTotals.twoptm += gameList.homeGames[i].twoptm;
        ourHomeTotals.twopta += gameList.homeGames[i].twopta;
        ourHomeTotals.threeptm += gameList.homeGames[i].threeptm;
        ourHomeTotals.threepta += gameList.homeGames[i].threepta;
        ourHomeTotals.ftm += gameList.homeGames[i].ftm;
        ourHomeTotals.fta += gameList.homeGames[i].fta;
        ourHomeTotals.oreb += gameList.homeGames[i].oreb;
        ourHomeTotals.reb += gameList.homeGames[i].reb;
        ourHomeTotals.ast += gameList.homeGames[i].ast;
        ourHomeTotals.stl += gameList.homeGames[i].stl;
        ourHomeTotals.blk += gameList.homeGames[i].blk;
        ourHomeTotals.to += gameList.homeGames[i].to;
        ourHomeTotals.pf += gameList.homeGames[i].pf;
        ourHomeTotals.pip += gameList.homeGames[i].pip;
        ourHomeTotals.scp += gameList.homeGames[i].scp;
        ourHomeTotals.pft += gameList.homeGames[i].pft;
        ourHomeTotals.fbp += gameList.homeGames[i].fbp;
        ourHomeTotals.bp += gameList.homeGames[i].bp;
      }
      //opponent percentages
      oppHomeTotals.fgp = ((oppHomeTotals.fgm/oppHomeTotals.fga) * 100).toFixed(2);
      oppHomeTotals.twoptp = ((oppHomeTotals.twoptm/oppHomeTotals.twopta) * 100).toFixed(2);
      oppHomeTotals.threeptp = ((oppHomeTotals.threeptm/oppHomeTotals.threepta) * 100).toFixed(2);
      oppHomeTotals.ftp = ((oppHomeTotals.ftm/oppHomeTotals.fta) * 100).toFixed(2);

      gameList.oppHomeTotals = oppHomeTotals;

      //our percentages
      ourHomeTotals.fgp = ((ourHomeTotals.fgm/ourHomeTotals.fga) * 100).toFixed(2);
      ourHomeTotals.twoptp = ((ourHomeTotals.twoptm/ourHomeTotals.twopta) * 100).toFixed(2);
      ourHomeTotals.threeptp = ((ourHomeTotals.threeptm/ourHomeTotals.threepta) * 100).toFixed(2);
      ourHomeTotals.ftp = ((ourHomeTotals.ftm/ourHomeTotals.fta) * 100).toFixed(2);

      gameList.ourHomeTotals = ourHomeTotals;

      //calculate opponent home averages
      var oppHomeAverages = {};
      oppHomeAverages.pts = ( oppHomeTotals.pts/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.fgm = ( oppHomeTotals.fgm/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.fga = ( oppHomeTotals.fga/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.twoptm = ( oppHomeTotals.twoptm/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.twopta = ( oppHomeTotals.twopta/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.threeptm = ( oppHomeTotals.threeptm/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.threepta = ( oppHomeTotals.threepta/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.ftm = ( oppHomeTotals.ftm/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.fta = ( oppHomeTotals.fta/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.oreb = ( oppHomeTotals.oreb/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.reb = ( oppHomeTotals.reb/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.ast = ( oppHomeTotals.ast/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.stl = ( oppHomeTotals.stl/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.blk = ( oppHomeTotals.blk/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.to = ( oppHomeTotals.to/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.pf = ( oppHomeTotals.pf/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.pip = ( oppHomeTotals.pip/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.scp = ( oppHomeTotals.scp/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.pft = (oppHomeTotals.pft/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.fbp = (oppHomeTotals.fbp/gameList.homeGames.length).toFixed(2);
      oppHomeAverages.bp = (oppHomeTotals.bp/gameList.homeGames.length).toFixed(2);

      gameList.oppHomeAverages = oppHomeAverages;

      //calculate our home averages
      var ourHomeAverages = {};
      ourHomeAverages.pts = ( ourHomeTotals.pts/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.fgm = ( ourHomeTotals.fgm/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.fga = ( ourHomeTotals.fga/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.twoptm = ( ourHomeTotals.twoptm/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.twopta = ( ourHomeTotals.twopta/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.threeptm = ( ourHomeTotals.threeptm/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.threepta = ( ourHomeTotals.threepta/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.ftm = ( ourHomeTotals.ftm/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.fta = ( ourHomeTotals.fta/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.oreb = ( ourHomeTotals.oreb/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.reb = ( ourHomeTotals.reb/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.ast = ( ourHomeTotals.ast/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.stl = ( ourHomeTotals.stl/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.blk = ( ourHomeTotals.blk/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.to = ( ourHomeTotals.to/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.pf = ( ourHomeTotals.pf/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.pip = ( ourHomeTotals.pip/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.scp = ( ourHomeTotals.scp/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.pft = (ourHomeTotals.pft/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.fbp = (ourHomeTotals.fbp/gameList.homeGames.length).toFixed(2);
      ourHomeAverages.bp = (ourHomeTotals.bp/gameList.homeGames.length).toFixed(2);

      gameList.ourHomeAverages = ourHomeAverages;

      //---------AWAY stats-----------

      //opponent away totals
      var oppAwayTotals = {};
      oppAwayTotals.pts,oppAwayTotals.fga, oppAwayTotals.twoptm, oppAwayTotals.twopta, oppAwayTotals.threeptm, oppAwayTotals.threepta, oppAwayTotals.ftm, oppAwayTotals.fta, oppAwayTotals.oreb, oppAwayTotals.reb, oppAwayTotals.ast, oppAwayTotals.stl,oppAwayTotals.blk,oppAwayTotals.to,oppAwayTotals.pf,oppAwayTotals.pip,oppAwayTotals.scp,oppAwayTotals.pft,oppAwayTotals.fbp,oppAwayTotals.bp;
      
      oppAwayTotals.fgm = 0;
      oppAwayTotals.pts=oppAwayTotals.fga= oppAwayTotals.twoptm= oppAwayTotals.twopta= oppAwayTotals.threeptm= oppAwayTotals.threepta= oppAwayTotals.ftm= oppAwayTotals.fta= oppAwayTotals.oreb= oppAwayTotals.reb= oppAwayTotals.ast= oppAwayTotals.stl=oppAwayTotals.blk=oppAwayTotals.to=oppAwayTotals.pf=oppAwayTotals.pip=oppAwayTotals.scp=oppAwayTotals.pft=oppAwayTotals.fbp=oppAwayTotals.bp=oppAwayTotals.fgm;

      //our Away totals
      var ourAwayTotals = {};
      ourAwayTotals.pts,ourAwayTotals.fga, ourAwayTotals.twoptm, ourAwayTotals.twopta, ourAwayTotals.threeptm, ourAwayTotals.threepta, ourAwayTotals.ftm, ourAwayTotals.fta, ourAwayTotals.oreb, ourAwayTotals.reb, ourAwayTotals.ast, ourAwayTotals.stl,ourAwayTotals.blk,ourAwayTotals.to,ourAwayTotals.pf,ourAwayTotals.pip,ourAwayTotals.scp,ourAwayTotals.pft,ourAwayTotals.fbp,ourAwayTotals.bp;
      
      ourAwayTotals.fgm = 0;
      ourAwayTotals.pts=ourAwayTotals.fga= ourAwayTotals.twoptm= ourAwayTotals.twopta= ourAwayTotals.threeptm= ourAwayTotals.threepta= ourAwayTotals.ftm= ourAwayTotals.fta= ourAwayTotals.oreb= ourAwayTotals.reb= ourAwayTotals.ast= ourAwayTotals.stl=ourAwayTotals.blk=ourAwayTotals.to=ourAwayTotals.pf=ourAwayTotals.pip=ourAwayTotals.scp=ourAwayTotals.pft=ourAwayTotals.fbp=ourAwayTotals.bp=ourAwayTotals.fgm;

      

      var i;
      for(i=0; i < gameList.awayGames.length; i++){
        //opponents
        oppAwayTotals.pts += gameList.oAwayGames[i].pts;
        oppAwayTotals.fgm += gameList.oAwayGames[i].fgm;
        oppAwayTotals.fga += gameList.oAwayGames[i].fga;
        oppAwayTotals.twoptm += gameList.oAwayGames[i].twoptm;
        oppAwayTotals.twopta += gameList.oAwayGames[i].twopta;
        oppAwayTotals.threeptm += gameList.oAwayGames[i].threeptm;
        oppAwayTotals.threepta += gameList.oAwayGames[i].threepta;
        oppAwayTotals.ftm += gameList.oAwayGames[i].ftm;
        oppAwayTotals.fta += gameList.oAwayGames[i].fta;
        oppAwayTotals.oreb += gameList.oAwayGames[i].oreb;
        oppAwayTotals.reb += gameList.oAwayGames[i].reb;
        oppAwayTotals.ast += gameList.oAwayGames[i].ast;
        oppAwayTotals.stl += gameList.oAwayGames[i].stl;
        oppAwayTotals.blk += gameList.oAwayGames[i].blk;
        oppAwayTotals.to += gameList.oAwayGames[i].to;
        oppAwayTotals.pf += gameList.oAwayGames[i].pf;
        oppAwayTotals.pip += gameList.oAwayGames[i].pip;
        oppAwayTotals.scp += gameList.oAwayGames[i].scp;
        oppAwayTotals.pft += gameList.oAwayGames[i].pft;
        oppAwayTotals.fbp += gameList.oAwayGames[i].fbp;
        oppAwayTotals.bp += gameList.oAwayGames[i].bp;

        //us
        ourAwayTotals.pts += gameList.awayGames[i].pts;
        ourAwayTotals.fgm += gameList.awayGames[i].fgm;
        ourAwayTotals.fga += gameList.awayGames[i].fga;
        ourAwayTotals.twoptm += gameList.awayGames[i].twoptm;
        ourAwayTotals.twopta += gameList.awayGames[i].twopta;
        ourAwayTotals.threeptm += gameList.awayGames[i].threeptm;
        ourAwayTotals.threepta += gameList.awayGames[i].threepta;
        ourAwayTotals.ftm += gameList.awayGames[i].ftm;
        ourAwayTotals.fta += gameList.awayGames[i].fta;
        ourAwayTotals.oreb += gameList.awayGames[i].oreb;
        ourAwayTotals.reb += gameList.awayGames[i].reb;
        ourAwayTotals.ast += gameList.awayGames[i].ast;
        ourAwayTotals.stl += gameList.awayGames[i].stl;
        ourAwayTotals.blk += gameList.awayGames[i].blk;
        ourAwayTotals.to += gameList.awayGames[i].to;
        ourAwayTotals.pf += gameList.awayGames[i].pf;
        ourAwayTotals.pip += gameList.awayGames[i].pip;
        ourAwayTotals.scp += gameList.awayGames[i].scp;
        ourAwayTotals.pft += gameList.awayGames[i].pft;
        ourAwayTotals.fbp += gameList.awayGames[i].fbp;
        ourAwayTotals.bp += gameList.awayGames[i].bp;
      }
      //opponent percentages
      oppAwayTotals.fgp = ((oppAwayTotals.fgm/oppAwayTotals.fga) * 100).toFixed(2);
      oppAwayTotals.twoptp = ((oppAwayTotals.twoptm/oppAwayTotals.twopta) * 100).toFixed(2);
      oppAwayTotals.threeptp = ((oppAwayTotals.threeptm/oppAwayTotals.threepta) * 100).toFixed(2);
      oppAwayTotals.ftp = ((oppAwayTotals.ftm/oppAwayTotals.fta) * 100).toFixed(2);

      gameList.oppAwayTotals = oppAwayTotals;

      //our percentages
      ourAwayTotals.fgp = ((ourAwayTotals.fgm/ourAwayTotals.fga) * 100).toFixed(2);
      ourAwayTotals.twoptp = ((ourAwayTotals.twoptm/ourAwayTotals.twopta) * 100).toFixed(2);
      ourAwayTotals.threeptp = ((ourAwayTotals.threeptm/ourAwayTotals.threepta) * 100).toFixed(2);
      ourAwayTotals.ftp = ((ourAwayTotals.ftm/ourAwayTotals.fta) * 100).toFixed(2);

      gameList.ourAwayTotals = ourAwayTotals;

      //calculate opponent away averages
      var oppAwayAverages = {};
      oppAwayAverages.pts = ( oppAwayTotals.pts/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.fgm = ( oppAwayTotals.fgm/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.fga = ( oppAwayTotals.fga/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.twoptm = ( oppAwayTotals.twoptm/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.twopta = ( oppAwayTotals.twopta/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.threeptm = ( oppAwayTotals.threeptm/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.threepta = ( oppAwayTotals.threepta/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.ftm = ( oppAwayTotals.ftm/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.fta = ( oppAwayTotals.fta/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.oreb = ( oppAwayTotals.oreb/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.reb = ( oppAwayTotals.reb/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.ast = ( oppAwayTotals.ast/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.stl = ( oppAwayTotals.stl/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.blk = ( oppAwayTotals.blk/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.to = ( oppAwayTotals.to/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.pf = ( oppAwayTotals.pf/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.pip = ( oppAwayTotals.pip/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.scp = ( oppAwayTotals.scp/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.pft = (oppAwayTotals.pft/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.fbp = (oppAwayTotals.fbp/gameList.awayGames.length).toFixed(2);
      oppAwayAverages.bp = (oppAwayTotals.bp/gameList.awayGames.length).toFixed(2);

      gameList.oppAwayAverages = oppAwayAverages;

      //calculate our away averages
      var ourAwayAverages = {};
      ourAwayAverages.pts = ( ourAwayTotals.pts/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.fgm = ( ourAwayTotals.fgm/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.fga = ( ourAwayTotals.fga/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.twoptm = ( ourAwayTotals.twoptm/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.twopta = ( ourAwayTotals.twopta/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.threeptm = ( ourAwayTotals.threeptm/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.threepta = ( ourAwayTotals.threepta/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.ftm = ( ourAwayTotals.ftm/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.fta = ( ourAwayTotals.fta/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.oreb = ( ourAwayTotals.oreb/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.reb = ( ourAwayTotals.reb/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.ast = ( ourAwayTotals.ast/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.stl = ( ourAwayTotals.stl/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.blk = ( ourAwayTotals.blk/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.to = ( ourAwayTotals.to/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.pf = ( ourAwayTotals.pf/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.pip = ( ourAwayTotals.pip/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.scp = ( ourAwayTotals.scp/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.pft = (ourAwayTotals.pft/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.fbp = (ourAwayTotals.fbp/gameList.awayGames.length).toFixed(2);
      ourAwayAverages.bp = (ourAwayTotals.bp/gameList.awayGames.length).toFixed(2);

      gameList.ourAwayAverages = ourAwayAverages;



      //---------WIN stats-----------

      //opponent wins totals
      var oppWinsTotals = {};
      oppWinsTotals.pts,oppWinsTotals.fga, oppWinsTotals.twoptm, oppWinsTotals.twopta, oppWinsTotals.threeptm, oppWinsTotals.threepta, oppWinsTotals.ftm, oppWinsTotals.fta, oppWinsTotals.oreb, oppWinsTotals.reb, oppWinsTotals.ast, oppWinsTotals.stl,oppWinsTotals.blk,oppWinsTotals.to,oppWinsTotals.pf,oppWinsTotals.pip,oppWinsTotals.scp,oppWinsTotals.pft,oppWinsTotals.fbp,oppWinsTotals.bp;
      
      oppWinsTotals.fgm = 0;
      oppWinsTotals.pts=oppWinsTotals.fga= oppWinsTotals.twoptm= oppWinsTotals.twopta= oppWinsTotals.threeptm= oppWinsTotals.threepta= oppWinsTotals.ftm= oppWinsTotals.fta= oppWinsTotals.oreb= oppWinsTotals.reb= oppWinsTotals.ast= oppWinsTotals.stl=oppWinsTotals.blk=oppWinsTotals.to=oppWinsTotals.pf=oppWinsTotals.pip=oppWinsTotals.scp=oppWinsTotals.pft=oppWinsTotals.fbp=oppWinsTotals.bp=oppWinsTotals.fgm;

      //our wins totals
      var ourWinsTotals = {};
      ourWinsTotals.pts,ourWinsTotals.fga, ourWinsTotals.twoptm, ourWinsTotals.twopta, ourWinsTotals.threeptm, ourWinsTotals.threepta, ourWinsTotals.ftm, ourWinsTotals.fta, ourWinsTotals.oreb, ourWinsTotals.reb, ourWinsTotals.ast, ourWinsTotals.stl,ourWinsTotals.blk,ourWinsTotals.to,ourWinsTotals.pf,ourWinsTotals.pip,ourWinsTotals.scp,ourWinsTotals.pft,ourWinsTotals.fbp,ourWinsTotals.bp;
      
      ourWinsTotals.fgm = 0;
      ourWinsTotals.pts=ourWinsTotals.fga= ourWinsTotals.twoptm= ourWinsTotals.twopta= ourWinsTotals.threeptm= ourWinsTotals.threepta= ourWinsTotals.ftm= ourWinsTotals.fta= ourWinsTotals.oreb= ourWinsTotals.reb= ourWinsTotals.ast= ourWinsTotals.stl=ourWinsTotals.blk=ourWinsTotals.to=ourWinsTotals.pf=ourWinsTotals.pip=ourWinsTotals.scp=ourWinsTotals.pft=ourWinsTotals.fbp=ourWinsTotals.bp=ourWinsTotals.fgm;

      

      var i;
      for(i=0; i < gameList.wins.length; i++){
        //opponents        
        oppWinsTotals.pts += gameList.oWins[i].pts;
        oppWinsTotals.fgm += gameList.oWins[i].fgm;
        oppWinsTotals.fga += gameList.oWins[i].fga;
        oppWinsTotals.twoptm += gameList.oWins[i].twoptm;
        oppWinsTotals.twopta += gameList.oWins[i].twopta;
        oppWinsTotals.threeptm += gameList.oWins[i].threeptm;
        oppWinsTotals.threepta += gameList.oWins[i].threepta;
        oppWinsTotals.ftm += gameList.oWins[i].ftm;
        oppWinsTotals.fta += gameList.oWins[i].fta;
        oppWinsTotals.oreb += gameList.oWins[i].oreb;
        oppWinsTotals.reb += gameList.oWins[i].reb;
        oppWinsTotals.ast += gameList.oWins[i].ast;
        oppWinsTotals.stl += gameList.oWins[i].stl;
        oppWinsTotals.blk += gameList.oWins[i].blk;
        oppWinsTotals.to += gameList.oWins[i].to;
        oppWinsTotals.pf += gameList.oWins[i].pf;
        oppWinsTotals.pip += gameList.oWins[i].pip;
        oppWinsTotals.scp += gameList.oWins[i].scp;
        oppWinsTotals.pft += gameList.oWins[i].pft;
        oppWinsTotals.fbp += gameList.oWins[i].fbp;
        oppWinsTotals.bp += gameList.oWins[i].bp;

        //us
        ourWinsTotals.pts += gameList.wins[i].pts;
        ourWinsTotals.fgm += gameList.wins[i].fgm;
        ourWinsTotals.fga += gameList.wins[i].fga;
        ourWinsTotals.twoptm += gameList.wins[i].twoptm;
        ourWinsTotals.twopta += gameList.wins[i].twopta;
        ourWinsTotals.threeptm += gameList.wins[i].threeptm;
        ourWinsTotals.threepta += gameList.wins[i].threepta;
        ourWinsTotals.ftm += gameList.wins[i].ftm;
        ourWinsTotals.fta += gameList.wins[i].fta;
        ourWinsTotals.oreb += gameList.wins[i].oreb;
        ourWinsTotals.reb += gameList.wins[i].reb;
        ourWinsTotals.ast += gameList.wins[i].ast;
        ourWinsTotals.stl += gameList.wins[i].stl;
        ourWinsTotals.blk += gameList.wins[i].blk;
        ourWinsTotals.to += gameList.wins[i].to;
        ourWinsTotals.pf += gameList.wins[i].pf;
        ourWinsTotals.pip += gameList.wins[i].pip;
        ourWinsTotals.scp += gameList.wins[i].scp;
        ourWinsTotals.pft += gameList.wins[i].pft;
        ourWinsTotals.fbp += gameList.wins[i].fbp;
        ourWinsTotals.bp += gameList.wins[i].bp;
      }
      //opponent percentages
      oppWinsTotals.fgp = ((oppWinsTotals.fgm/oppWinsTotals.fga) * 100).toFixed(2);
      oppWinsTotals.twoptp = ((oppWinsTotals.twoptm/oppWinsTotals.twopta) * 100).toFixed(2);
      oppWinsTotals.threeptp = ((oppWinsTotals.threeptm/oppWinsTotals.threepta) * 100).toFixed(2);
      oppWinsTotals.ftp = ((oppWinsTotals.ftm/oppWinsTotals.fta) * 100).toFixed(2);

      gameList.oppWinsTotals = oppWinsTotals;

      //our percentages
      ourWinsTotals.fgp = ((ourWinsTotals.fgm/ourWinsTotals.fga) * 100).toFixed(2);
      ourWinsTotals.twoptp = ((ourWinsTotals.twoptm/ourWinsTotals.twopta) * 100).toFixed(2);
      ourWinsTotals.threeptp = ((ourWinsTotals.threeptm/ourWinsTotals.threepta) * 100).toFixed(2);
      ourWinsTotals.ftp = ((ourWinsTotals.ftm/ourWinsTotals.fta) * 100).toFixed(2);

      gameList.ourWinsTotals = ourWinsTotals;

      //calculate opponent away averages
      var oppWinsAverages = {};
      oppWinsAverages.pts = ( oppWinsTotals.pts/gameList.wins.length).toFixed(2);
      oppWinsAverages.fgm = ( oppWinsTotals.fgm/gameList.wins.length).toFixed(2);
      oppWinsAverages.fga = ( oppWinsTotals.fga/gameList.wins.length).toFixed(2);
      oppWinsAverages.twoptm = ( oppWinsTotals.twoptm/gameList.wins.length).toFixed(2);
      oppWinsAverages.twopta = ( oppWinsTotals.twopta/gameList.wins.length).toFixed(2);
      oppWinsAverages.threeptm = ( oppWinsTotals.threeptm/gameList.wins.length).toFixed(2);
      oppWinsAverages.threepta = ( oppWinsTotals.threepta/gameList.wins.length).toFixed(2);
      oppWinsAverages.ftm = ( oppWinsTotals.ftm/gameList.wins.length).toFixed(2);
      oppWinsAverages.fta = ( oppWinsTotals.fta/gameList.wins.length).toFixed(2);
      oppWinsAverages.oreb = ( oppWinsTotals.oreb/gameList.wins.length).toFixed(2);
      oppWinsAverages.reb = ( oppWinsTotals.reb/gameList.wins.length).toFixed(2);
      oppWinsAverages.ast = ( oppWinsTotals.ast/gameList.wins.length).toFixed(2);
      oppWinsAverages.stl = ( oppWinsTotals.stl/gameList.wins.length).toFixed(2);
      oppWinsAverages.blk = ( oppWinsTotals.blk/gameList.wins.length).toFixed(2);
      oppWinsAverages.to = ( oppWinsTotals.to/gameList.wins.length).toFixed(2);
      oppWinsAverages.pf = ( oppWinsTotals.pf/gameList.wins.length).toFixed(2);
      oppWinsAverages.pip = ( oppWinsTotals.pip/gameList.wins.length).toFixed(2);
      oppWinsAverages.scp = ( oppWinsTotals.scp/gameList.wins.length).toFixed(2);
      oppWinsAverages.pft = (oppWinsTotals.pft/gameList.wins.length).toFixed(2);
      oppWinsAverages.fbp = (oppWinsTotals.fbp/gameList.wins.length).toFixed(2);
      oppWinsAverages.bp = (oppWinsTotals.bp/gameList.wins.length).toFixed(2);

      gameList.oppWinsAverages = oppWinsAverages;

      //calculate our away averages
      var ourWinsAverages = {};
      ourWinsAverages.pts = ( ourWinsTotals.pts/gameList.wins.length).toFixed(2);
      ourWinsAverages.fgm = ( ourWinsTotals.fgm/gameList.wins.length).toFixed(2);
      ourWinsAverages.fga = ( ourWinsTotals.fga/gameList.wins.length).toFixed(2);
      ourWinsAverages.twoptm = ( ourWinsTotals.twoptm/gameList.wins.length).toFixed(2);
      ourWinsAverages.twopta = ( ourWinsTotals.twopta/gameList.wins.length).toFixed(2);
      ourWinsAverages.threeptm = ( ourWinsTotals.threeptm/gameList.wins.length).toFixed(2);
      ourWinsAverages.threepta = ( ourWinsTotals.threepta/gameList.wins.length).toFixed(2);
      ourWinsAverages.ftm = ( ourWinsTotals.ftm/gameList.wins.length).toFixed(2);
      ourWinsAverages.fta = ( ourWinsTotals.fta/gameList.wins.length).toFixed(2);
      ourWinsAverages.oreb = ( ourWinsTotals.oreb/gameList.wins.length).toFixed(2);
      ourWinsAverages.reb = ( ourWinsTotals.reb/gameList.wins.length).toFixed(2);
      ourWinsAverages.ast = ( ourWinsTotals.ast/gameList.wins.length).toFixed(2);
      ourWinsAverages.stl = ( ourWinsTotals.stl/gameList.wins.length).toFixed(2);
      ourWinsAverages.blk = ( ourWinsTotals.blk/gameList.wins.length).toFixed(2);
      ourWinsAverages.to = ( ourWinsTotals.to/gameList.wins.length).toFixed(2);
      ourWinsAverages.pf = ( ourWinsTotals.pf/gameList.wins.length).toFixed(2);
      ourWinsAverages.pip = ( ourWinsTotals.pip/gameList.wins.length).toFixed(2);
      ourWinsAverages.scp = ( ourWinsTotals.scp/gameList.wins.length).toFixed(2);
      ourWinsAverages.pft = (ourWinsTotals.pft/gameList.wins.length).toFixed(2);
      ourWinsAverages.fbp = (ourWinsTotals.fbp/gameList.wins.length).toFixed(2);
      ourWinsAverages.bp = (ourWinsTotals.bp/gameList.wins.length).toFixed(2);

      gameList.ourWinsAverages = ourWinsAverages;


      //---------LOSS stats-----------

      //opponent loss totals
      var oppLossTotals = {};
      oppLossTotals.pts,oppLossTotals.fga, oppLossTotals.twoptm, oppLossTotals.twopta, oppLossTotals.threeptm, oppLossTotals.threepta, oppLossTotals.ftm, oppLossTotals.fta, oppLossTotals.oreb, oppLossTotals.reb, oppLossTotals.ast, oppLossTotals.stl,oppLossTotals.blk,oppLossTotals.to,oppLossTotals.pf,oppLossTotals.pip,oppLossTotals.scp,oppLossTotals.pft,oppLossTotals.fbp,oppLossTotals.bp;
      
      oppLossTotals.fgm = 0;
      oppLossTotals.pts=oppLossTotals.fga= oppLossTotals.twoptm= oppLossTotals.twopta= oppLossTotals.threeptm= oppLossTotals.threepta= oppLossTotals.ftm= oppLossTotals.fta= oppLossTotals.oreb= oppLossTotals.reb= oppLossTotals.ast= oppLossTotals.stl=oppLossTotals.blk=oppLossTotals.to=oppLossTotals.pf=oppLossTotals.pip=oppLossTotals.scp=oppLossTotals.pft=oppLossTotals.fbp=oppLossTotals.bp=oppLossTotals.fgm;

      //our loss totals
      var ourLossTotals = {};
      ourLossTotals.pts,ourLossTotals.fga, ourLossTotals.twoptm, ourLossTotals.twopta, ourLossTotals.threeptm, ourLossTotals.threepta, ourLossTotals.ftm, ourLossTotals.fta, ourLossTotals.oreb, ourLossTotals.reb, ourLossTotals.ast, ourLossTotals.stl,ourLossTotals.blk,ourLossTotals.to,ourLossTotals.pf,ourLossTotals.pip,ourLossTotals.scp,ourLossTotals.pft,ourLossTotals.fbp,ourLossTotals.bp;
      
      ourLossTotals.fgm = 0;
      ourLossTotals.pts=ourLossTotals.fga= ourLossTotals.twoptm= ourLossTotals.twopta= ourLossTotals.threeptm= ourLossTotals.threepta= ourLossTotals.ftm= ourLossTotals.fta= ourLossTotals.oreb= ourLossTotals.reb= ourLossTotals.ast= ourLossTotals.stl=ourLossTotals.blk=ourLossTotals.to=ourLossTotals.pf=ourLossTotals.pip=ourLossTotals.scp=ourLossTotals.pft=ourLossTotals.fbp=ourLossTotals.bp=ourLossTotals.fgm;

      

      var i;
      for(i=0; i < gameList.losses.length; i++){
        //opponents        
        oppLossTotals.pts += gameList.oLosses[i].pts;
        oppLossTotals.fgm += gameList.oLosses[i].fgm;
        oppLossTotals.fga += gameList.oLosses[i].fga;
        oppLossTotals.twoptm += gameList.oLosses[i].twoptm;
        oppLossTotals.twopta += gameList.oLosses[i].twopta;
        oppLossTotals.threeptm += gameList.oLosses[i].threeptm;
        oppLossTotals.threepta += gameList.oLosses[i].threepta;
        oppLossTotals.ftm += gameList.oLosses[i].ftm;
        oppLossTotals.fta += gameList.oLosses[i].fta;
        oppLossTotals.oreb += gameList.oLosses[i].oreb;
        oppLossTotals.reb += gameList.oLosses[i].reb;
        oppLossTotals.ast += gameList.oLosses[i].ast;
        oppLossTotals.stl += gameList.oLosses[i].stl;
        oppLossTotals.blk += gameList.oLosses[i].blk;
        oppLossTotals.to += gameList.oLosses[i].to;
        oppLossTotals.pf += gameList.oLosses[i].pf;
        oppLossTotals.pip += gameList.oLosses[i].pip;
        oppLossTotals.scp += gameList.oLosses[i].scp;
        oppLossTotals.pft += gameList.oLosses[i].pft;
        oppLossTotals.fbp += gameList.oLosses[i].fbp;
        oppLossTotals.bp += gameList.oLosses[i].bp;

        //us
        ourLossTotals.pts += gameList.losses[i].pts;
        ourLossTotals.fgm += gameList.losses[i].fgm;
        ourLossTotals.fga += gameList.losses[i].fga;
        ourLossTotals.twoptm += gameList.losses[i].twoptm;
        ourLossTotals.twopta += gameList.losses[i].twopta;
        ourLossTotals.threeptm += gameList.losses[i].threeptm;
        ourLossTotals.threepta += gameList.losses[i].threepta;
        ourLossTotals.ftm += gameList.losses[i].ftm;
        ourLossTotals.fta += gameList.losses[i].fta;
        ourLossTotals.oreb += gameList.losses[i].oreb;
        ourLossTotals.reb += gameList.losses[i].reb;
        ourLossTotals.ast += gameList.losses[i].ast;
        ourLossTotals.stl += gameList.losses[i].stl;
        ourLossTotals.blk += gameList.losses[i].blk;
        ourLossTotals.to += gameList.losses[i].to;
        ourLossTotals.pf += gameList.losses[i].pf;
        ourLossTotals.pip += gameList.losses[i].pip;
        ourLossTotals.scp += gameList.losses[i].scp;
        ourLossTotals.pft += gameList.losses[i].pft;
        ourLossTotals.fbp += gameList.losses[i].fbp;
        ourLossTotals.bp += gameList.losses[i].bp;
      }
      //opponent percentages
      oppLossTotals.fgp = ((oppLossTotals.fgm/oppLossTotals.fga) * 100).toFixed(2);
      oppLossTotals.twoptp = ((oppLossTotals.twoptm/oppLossTotals.twopta) * 100).toFixed(2);
      oppLossTotals.threeptp = ((oppLossTotals.threeptm/oppLossTotals.threepta) * 100).toFixed(2);
      oppLossTotals.ftp = ((oppLossTotals.ftm/oppLossTotals.fta) * 100).toFixed(2);

      gameList.oppLossTotals = oppLossTotals;

      //our percentages
      ourLossTotals.fgp = ((ourLossTotals.fgm/ourLossTotals.fga) * 100).toFixed(2);
      ourLossTotals.twoptp = ((ourLossTotals.twoptm/ourLossTotals.twopta) * 100).toFixed(2);
      ourLossTotals.threeptp = ((ourLossTotals.threeptm/ourLossTotals.threepta) * 100).toFixed(2);
      ourLossTotals.ftp = ((ourLossTotals.ftm/ourLossTotals.fta) * 100).toFixed(2);

      gameList.ourLossTotals = ourLossTotals;

      //calculate opponent away averages
      var oppLossAverages = {};
      oppLossAverages.pts = ( oppLossTotals.pts/gameList.losses.length).toFixed(2);
      oppLossAverages.fgm = ( oppLossTotals.fgm/gameList.losses.length).toFixed(2);
      oppLossAverages.fga = ( oppLossTotals.fga/gameList.losses.length).toFixed(2);
      oppLossAverages.twoptm = ( oppLossTotals.twoptm/gameList.losses.length).toFixed(2);
      oppLossAverages.twopta = ( oppLossTotals.twopta/gameList.losses.length).toFixed(2);
      oppLossAverages.threeptm = ( oppLossTotals.threeptm/gameList.losses.length).toFixed(2);
      oppLossAverages.threepta = ( oppLossTotals.threepta/gameList.losses.length).toFixed(2);
      oppLossAverages.ftm = ( oppLossTotals.ftm/gameList.losses.length).toFixed(2);
      oppLossAverages.fta = ( oppLossTotals.fta/gameList.losses.length).toFixed(2);
      oppLossAverages.oreb = ( oppLossTotals.oreb/gameList.losses.length).toFixed(2);
      oppLossAverages.reb = ( oppLossTotals.reb/gameList.losses.length).toFixed(2);
      oppLossAverages.ast = ( oppLossTotals.ast/gameList.losses.length).toFixed(2);
      oppLossAverages.stl = ( oppLossTotals.stl/gameList.losses.length).toFixed(2);
      oppLossAverages.blk = ( oppLossTotals.blk/gameList.losses.length).toFixed(2);
      oppLossAverages.to = ( oppLossTotals.to/gameList.losses.length).toFixed(2);
      oppLossAverages.pf = ( oppLossTotals.pf/gameList.losses.length).toFixed(2);
      oppLossAverages.pip = ( oppLossTotals.pip/gameList.losses.length).toFixed(2);
      oppLossAverages.scp = ( oppLossTotals.scp/gameList.losses.length).toFixed(2);
      oppLossAverages.pft = (oppLossTotals.pft/gameList.losses.length).toFixed(2);
      oppLossAverages.fbp = (oppLossTotals.fbp/gameList.losses.length).toFixed(2);
      oppLossAverages.bp = (oppLossTotals.bp/gameList.losses.length).toFixed(2);

      gameList.oppLossAverages = oppLossAverages;

      //calculate our away averages
      var ourLossAverages = {};
      ourLossAverages.pts = ( ourLossTotals.pts/gameList.losses.length).toFixed(2);
      ourLossAverages.fgm = ( ourLossTotals.fgm/gameList.losses.length).toFixed(2);
      ourLossAverages.fga = ( ourLossTotals.fga/gameList.losses.length).toFixed(2);
      ourLossAverages.twoptm = ( ourLossTotals.twoptm/gameList.losses.length).toFixed(2);
      ourLossAverages.twopta = ( ourLossTotals.twopta/gameList.losses.length).toFixed(2);
      ourLossAverages.threeptm = ( ourLossTotals.threeptm/gameList.losses.length).toFixed(2);
      ourLossAverages.threepta = ( ourLossTotals.threepta/gameList.losses.length).toFixed(2);
      ourLossAverages.ftm = ( ourLossTotals.ftm/gameList.losses.length).toFixed(2);
      ourLossAverages.fta = ( ourLossTotals.fta/gameList.losses.length).toFixed(2);
      ourLossAverages.oreb = ( ourLossTotals.oreb/gameList.losses.length).toFixed(2);
      ourLossAverages.reb = ( ourLossTotals.reb/gameList.losses.length).toFixed(2);
      ourLossAverages.ast = ( ourLossTotals.ast/gameList.losses.length).toFixed(2);
      ourLossAverages.stl = ( ourLossTotals.stl/gameList.losses.length).toFixed(2);
      ourLossAverages.blk = ( ourLossTotals.blk/gameList.losses.length).toFixed(2);
      ourLossAverages.to = ( ourLossTotals.to/gameList.losses.length).toFixed(2);
      ourLossAverages.pf = ( ourLossTotals.pf/gameList.losses.length).toFixed(2);
      ourLossAverages.pip = ( ourLossTotals.pip/gameList.losses.length).toFixed(2);
      ourLossAverages.scp = ( ourLossTotals.scp/gameList.losses.length).toFixed(2);
      ourLossAverages.pft = (ourLossTotals.pft/gameList.losses.length).toFixed(2);
      ourLossAverages.fbp = (ourLossTotals.fbp/gameList.losses.length).toFixed(2);
      ourLossAverages.bp = (ourLossTotals.bp/gameList.losses.length).toFixed(2);

      gameList.ourLossAverages = ourLossAverages;

    }
    
})();