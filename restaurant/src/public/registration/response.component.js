(function() {
    "use strict";
    
    angular.module('public')
    .component('httpresponse', {
      template: '<span ng-if="$ctrl.show">{{$regCtrl.setExists(false)}}Category does not exist</span>',
      controller: ResponseController
    });
    
    
    ResponseController.$inject = ['$rootScope'];
    function ResponseController ($rootScope) {
      var $ctrl = this;
      var listener;
    
      $ctrl.$onInit = function() {
        $ctrl.show = false;
        listener = $rootScope.$on('category:activate', onCategoryActivate);
      };
    
      $ctrl.$onDestroy = function() {
        listener();
      };
    
      function onCategoryActivate(event, data) {
        $ctrl.show = data.on;
      }
    }
    
    })();