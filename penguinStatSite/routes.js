(function () {
    'use strict';
    
    angular.module('StatApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      $urlRouterProvider.otherwise('/');
    
      $stateProvider
    
      .state('home', {
        url: '/',
        templateUrl: 'home.template.html'
      })    
    
      .state('players', {
        url: '/players',
        templateUrl: 'players.template.html',
        controller: 'PlayersController as playersList',
        resolve: {
          players: ['PlayerDataService', function (PlayerDataService) {
            return PlayerDataService.getAllPlayers().then(function(result){
                return result.data;
            });
          }]
        }
      })
    
      .state('players.playerStats', {
        url: '/playerStats/{shortName}',
        templateUrl: 'playerStats.template.html',
        controller: "StatsController as playerStats",
        resolve: {
            stats: ['$stateParams','PlayerDataService', function ($stateParams, PlayerDataService) {
                return PlayerDataService.getStatsForPlayer($stateParams.shortName).then(function(result){
                  return result.data.stats;
              });
            }],
            name: ['$stateParams','PlayerDataService', function ($stateParams, PlayerDataService) {
                return PlayerDataService.getStatsForPlayer($stateParams.shortName).then(function(result){
                    return result.data.name;
              });
            }]       
            
        }
      })
      
      .state('team', {
        url: '/team',
        templateUrl: 'team.template.html',
        controller: 'TeamController as gameList',
        resolve: {
          games: ['TeamDataService', function (TeamDataService) {
            return TeamDataService.getAllGames().then(function(result){
                return result.data;
            });
          }],
          ourStats: ['TeamDataService', function (TeamDataService) {
            return TeamDataService.getOurStats(1).then(function(result){
              return result.data;
          });
      }]
        }
      })
      
      .state('team.teamStats', {
        url: '/teamStats/{round}',
        templateUrl: 'teamStats.template.html',
        controller: "TeamStatsController as teamStats",
        resolve: {
            stats: ['$stateParams','TeamDataService', function ($stateParams, TeamDataService) {
                return TeamDataService.getGameStats($stateParams.round).then(function(result){
                  return result.data;
            });
        }],   
            round: ['$stateParams','TeamDataService', function ($stateParams, TeamDataService) {
              return $stateParams.round;
        }],
          ourStats: ['$stateParams','TeamDataService', function ($stateParams, TeamDataService) {
            return TeamDataService.getOurStats($stateParams.round).then(function(result){
              return result.data;
          });
      }]      
            
        }
      });
    
    }
    
    })();