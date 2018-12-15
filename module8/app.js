(function(){
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItems);

    function FoundItems(){
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
              items: '<',
              onRemove: '&',
              nothingFound: '<'
            }
          };
        
        return ddo;
    }      

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var menu = this;

        var menuService = MenuSearchService;

        menu.searchTerm = "";

        menu.nothingFound = false;

        menu.setList = function(){
            var promise = menuService.getMatchedMenuItems(menu.searchTerm);
            promise.then(function(response){
                menu.found = response;
                if (menu.found.length === 0){
                    menu.nothingFound = true;
                }
                else{
                    menu.nothingFound = false;
                }
            })
        };

        menu.removeItem = function(index){
            menu.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath){
        var service = this;
        
        service.foundItems = [];

        service.getMatchedMenuItems = function(searchTerm){
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")            
            });
            
            service.foundItems = [];

            return response.then( function (result){
                // process result and only keep items that match
                
                var menu = result.data.menu_items;

                for(var i=0; i < menu.length; i++){
                    if(searchTerm !==""){
                        var currentItem = menu[i];
                        if(currentItem.description.indexOf(searchTerm.toLowerCase()) !== -1){
                            service.foundItems.push(currentItem);
                        }
                    }                    
                }

                return service.foundItems;
            });
            
            
        };

        service.getItems = function(){
            return service.foundItems;
        };

    }


})();