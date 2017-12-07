(function() {
    "use strict";
    
    angular.module('public')
    .factory('responseHttpInterceptor', ResponseHttpInterceptor);
    
    ResponseHttpInterceptor.$inject = ['$rootScope', '$q'];

    function ResponseHttpInterceptor($rootScope, $q) {
      var loadingEventName = 'category:activate';
    
      return {
        //valid response
        response: function (response) {
          $rootScope.$broadcast(loadingEventName, {on: false});
    
          return response;
        },
    
        //response error
        responseError: function (response) {
            if(response.status == 500){
              $rootScope.$broadcast(loadingEventName, {on: true});          
            }
          
      
          return $q.reject(response);
        
        }
      };
    }
    
    })();
    