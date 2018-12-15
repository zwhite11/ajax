(function () {
    'use strict';
    
    angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath){
        var service = this;

        service.getAllCategories = function(){
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")            
            });

            console.log("response: ", response);
            return response;
        };

        service.getItemsForCategory = function(categoryShortName){
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)            
            });
            return response;
            
        };
    }
    
})();