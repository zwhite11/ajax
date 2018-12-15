(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.registration', {
      url: '/registration',
      templateUrl: 'src/public/registration/regForm.html',
      controller: 'RegistrationController',
      controllerAs: 'regCtrl'
    })
    .state('public.myInfo', {
      url: '/myInfo',
      templateUrl: 'src/public/my-info/myInfo.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfoCtrl',
      resolve:{
        user:['MyInfoService', function(MyInfoService){
          return MyInfoService.getUser();
        }]
      }

    });
}
})();
