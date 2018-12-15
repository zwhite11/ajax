(function(){
    'use strict';

    angular.module('public')
    .service('CategoryCheckService', CategoryCheckService);

    CategoryCheckService.$inject = ['$http', 'ApiPath'];
    function CategoryCheckService($http, ApiPath){
        var service = this;

        service.categoryExists= function(categoryName){
            var response = $http({
                method: "GET",
                url: (ApiPath + "/categories/" + categoryName + ".json")            
            });

            return response;

            
        };
    }

})();