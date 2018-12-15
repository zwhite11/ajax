(function(){
    "use strict";
    
    angular.module('public')
    .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['CategoryCheckService', 'MyInfoService'];
    function RegistrationController(CategoryCheckService, MyInfoService){
        var regCtrl = this;
        var catService = CategoryCheckService;
        var infoService = MyInfoService;
        
        //boolean - if the category exists
        regCtrl.catExists = false;

        //empty user object
        regCtrl.user = {};

        regCtrl.categoryCheck = function(categoryName){
            regCtrl.exists = catService.categoryExists(categoryName);

            return regCtrl.exists.then(function(result){
                regCtrl.catExists = true;
            });
        };

        regCtrl.setExists = function(exists){
            regCtrl.catExists = exists;
        };
        
        regCtrl.submit = function (user) {
            infoService.setUser(user);
            regCtrl.completed = true;
            
        };
    }

})();