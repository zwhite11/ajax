(function () {
    'use strict';
    
    angular.module('Data')
    .service('PlayerDataService', PlayerDataService)

    PlayerDataService.$inject = ['$http'];
    function PlayerDataService($http){
        var service = this;
        var playerStats;

        service.getAllPlayers = function(){
            var response = $http({
                method: "GET",
                url: ("/ajax/penguinStatSite/players.json")            
            });

            // console.log("response: ", response);
            return response;
        };

        service.getStatsForPlayer = function(shortName){
            var response = $http({
                method: "GET",
                url: ("/players/" + shortName + ".json")            
            });    

            return response;            
        };
    }
    
})();
