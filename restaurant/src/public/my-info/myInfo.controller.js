(function () {
    "use strict";

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['user'];
    function MyInfoController(user) {
        var $ctrl = this;
        $ctrl.user = user;
    }


})();
    