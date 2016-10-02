/**
 * CPU Controller
 */

app.controller('CarDetailsCtlr', ['$scope', '$stateParams', '$http','$rootScope','$interval','Config','Alert', CarDetailsCtlr]);

    function CarDetailsCtlr($scope, $stateParams, $http,$rootScope, $interval, Config, Alert) {
        $scope.username = $rootScope.username;

        $scope.car;
        $scope.carParts;
        $scope.carMaintenance;

        $http.get(Config.url + '/cars/' + $stateParams.id)
            .success(function(data, status, headers, config) {
                $scope.car =  data;
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Can't fetch car data");
            });

        $http.get(Config.url + '/cars/parts/' + $stateParams.id)
            .success(function(data, status, headers, config) {
                $scope.carParts =  data;
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Can't fetch car parts");
            });

        $http.get(Config.url + '/cars/maintenance/' + $stateParams.id)
            .success(function(data, status, headers, config) {
                $scope.carMaintenance =  data;
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Can't fetch car parts");
            });
    }





