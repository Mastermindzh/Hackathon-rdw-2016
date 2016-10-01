/**
 * Dashboard Controller
 */


app

.controller('DashboardCtrl', ['$scope','$http','$rootScope','Config','Alert', DashboardCtrl]);

    function DashboardCtrl($scope, $http, $rootScope, Config, Alert) {

        $scope.username = {'username':''};

        $scope.login = function () {
            $rootScope.username = $scope.username.username;
        }
    }