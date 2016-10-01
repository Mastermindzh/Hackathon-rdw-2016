/**
 * CPU Controller
 */

app.controller('ApprovalsCtrl', ['$scope','$http','$rootScope','Config','Alert', ApprovalsCtrl]);

    function ApprovalsCtrl($scope, $http,$rootScope, Config, Alert) {

        $scope.username = $rootScope.username;
    }




