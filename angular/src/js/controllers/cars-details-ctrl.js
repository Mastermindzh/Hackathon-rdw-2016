/**
 * CPU Controller
 */

app.controller('CarDetailsCtlr', ['$scope', '$stateParams', '$http','$rootScope','$interval','Config','Alert', CarDetailsCtlr]);

    function CarDetailsCtlr($scope, $stateParams, $http,$rootScope, $interval, Config, Alert) {
        $scope.username = $rootScope.username;

        $scope.car;
        console.log($stateParams.id);

        $http.get(Config.url + '/cars/' + $stateParams.id)
            .success(function(data, status, headers, config) {
                $scope.car =  data;
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Can't fetch car data");
            });
    }





