(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('currency', CurrencyFilter);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuy();

        toBuyList.buy = function(index){
            ShoppingListCheckOffService.buy(index);
        };        
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', 'currencyFilter'];
    function AlreadyBoughtController(ShoppingListCheckOffService, currencyFilter){
        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.getBought();

        boughtList.showCost = function(item){
            var price =  ShoppingListCheckOffService.getCost(item);
            var msg = currencyFilter(price);
            return msg;
        };
    }

    function ShoppingListCheckOffService(){
        var service = this;

        //arrays
        var toBuy = [
            { name: "cookies", quantity: 10, pricePerItem: 1 },
            { name: "cake", quantity: 3, pricePerItem: 10 },
            { name: "chips", quantity: 6, pricePerItem: 2 },
            { name: "apples", quantity: 10, pricePerItem: 3 },
            { name: "oranges", quantity: 3, pricePerItem: 3 }
        ];
        var bought = [];

        service.getToBuy = function(){
            return toBuy;
        };

        service.getBought = function(){
            return bought;
        };

        service.buy = function(index){
            var toRemove = toBuy[index];
            //remove from toBuy list
            toBuy.splice(index,1);

            //add to bought list
            bought.push(toRemove);
        };

        //return the toal cost of purchase
        service.getCost = function(item){
            return (item.quantity * item.pricePerItem);
        }      
    }

    //filter to show price as $$$price
    function CurrencyFilter(){
        return function(input){
            input = "$$$" + input;
            return input;
        }
    }
    
})();