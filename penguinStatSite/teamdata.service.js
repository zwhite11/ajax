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
                url: ("./teamStats/opponentStats.json")            
            });

            // console.log("response: ", response);
            return response;
        };

        service.getGameStats = function(round){
            var response = $http({
                method: "GET",
                url: ("./teamStats/opponentStats.json")            
            });  
            service.round = round;

            return response;            
        };

        service.getOurStats = function(round){
            var response = $http({
                method: "GET",
                url: ("./teamStats/ourStats.json")            
            });  
            service.round = round;

            return response;            
        };

    }
    
})();
