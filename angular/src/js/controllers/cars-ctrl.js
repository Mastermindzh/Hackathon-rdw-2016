/**
 * CPU Controller
 */

app.controller('CarsCtrl', ['$scope','$http','$rootScope','Config','Alert', CarsCtrl]);

    function CarsCtrl($scope, $http,$rootScope, Config, Alert) {

        $scope.searchText= {"search":''};

        $scope.username = $rootScope.username;

        $http.get(Config.url + '/cars')
            .success(function(data, status, headers, config) {
                $scope.cars = JSON.stringify(data);
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Can't fetch car data");
            });
}




