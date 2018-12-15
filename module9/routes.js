(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      $urlRouterProvider.otherwise('/');
    
      $stateProvider
    
      .state('home', {
        url: '/',
        templateUrl: 'home.template.html'
      })
    
    
      .state('categories', {
        url: '/categories',
        templateUrl: 'categories.template.html',
        controller: 'CategoriesController as catList',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories().then(function(result){
                return result.data;
            });
          }]
        }
      })
    
      .state('categories.itemDetail', {
        url: '/item-detail/{shortName}',
        templateUrl: 'item-detail.template.html',
        controller: "ItemDetailController as itemDetail",
        resolve: {
            items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.shortName).then(function(result){
                    return result.data.menu_items;
              });
            }],
            category: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.shortName).then(function(result){
                  return result.data.category;
            });
          }]
            
        }
      });
    
    }
    
    })();