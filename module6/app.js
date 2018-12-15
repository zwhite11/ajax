(function () {
    'use strict';
    
    angular.module('LunchChecker', [])    
    .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];
    function LunchCheckerController($scope){
        $scope.lunch = "";
        $scope.checkLunch = function(){
            var arrayOfLunch = $scope.lunch.split(",");            
            
            var lunch2 = arrayOfLunch.reduce(function(lunch2, lunchItem){
                if(lunchItem.trim() != ""){
                    lunch2.push(lunchItem.trim());
                }
                return lunch2;
            }, []);

            var lunchItems = lunch2.length;

            if(lunchItems === 0){
                $scope.lunchMessage = "Please enter data first";
                $scope.messageStyle = "color:red;";
                $scope.textboxStyle = "border-color:red;";
                console.log("style: " + $scope.messageStyle);
            }

            else if(lunchItems <= 3){
                $scope.lunchMessage = "Enjoy!"
                $scope.messageStyle = "color:green;";
                $scope.textboxStyle = "border-color:green;";
            }
            else{
                $scope.lunchMessage = "Too Much!"
                $scope.messageStyle = "color:red;";
                $scope.textboxStyle = "border-color:red;";
            }
            
        };
    }

    
    
})();
    