(function(){
    'use strict';

    angular.module('public')
    .service('MyInfoService', MyInfoService);

    function MyInfoService(){
        var service = this;
        
        service.setUser = function(user){
            service.user = user;
        };


        service.getUser = function(){
            return service.user;
        };           
        
    }

})();