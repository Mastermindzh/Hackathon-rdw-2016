/**
 * CPU Controller
 */

app.controller('CarDetailsCtlr', ['$scope','$http','$rootScope','$interval','Config','Alert', CarDetailsCtlr]);

    function CarDetailsCtlr($scope, $http,$rootScope, $interval, Config, Alert) {
        $scope.username = $rootScope.username;
    }




