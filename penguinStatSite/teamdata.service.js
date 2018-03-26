(function () {
    'use strict';
    
    angular.module('Data')
    .service('TeamDataService', TeamDataService)

    TeamDataService.$inject = ['$http'];
    function TeamDataService($http){
        var service = this;

        service.getAllGames = function(){
            var response = $http({
                method: "GET",
                url: ("/ajax/penguinStatSite/teamStats/opponentStats.json")            
            });

            // console.log("response: ", response);
            return response;
        };

        service.getGameStats = function(round){
            var response = $http({
                method: "GET",
                url: ("/ajax/penguinStatSite/teamStats/opponentStats.json")            
            });  
            service.round = round;

            return response;            
        };

        service.getOurStats = function(round){
            var response = $http({
                method: "GET",
                url: ("/ajax/penguinStatSite/teamStats/ourStats.json")            
            });  
            service.round = round;

            return response;            
        };


        //WOMENS GAMES

        service.getAllWGames = function(){
            var response = $http({
                method: "GET",
                url: ("/ajax/penguinStatSite/wTeamStats/opponentStats.json")            
            });

            // console.log("response: ", response);
            return response;
        };

        service.getWGameStats = function(round){
            var response = $http({
                method: "GET",
                url: ("/ajax/penguinStatSite/wTeamStats/opponentStats.json")            
            });  
            service.round = round;

            return response;            
        };

        service.getOurWStats = function(){
            var response = $http({
                method: "GET",
                url: ("/ajax/penguinStatSite/wTeamStats/ourStats.json")            
            });  

            return response;            
        };

    }
    
})();
