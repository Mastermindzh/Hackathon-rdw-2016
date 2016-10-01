/**
 * CPU Controller
 */

app.controller('CarsCtrl', ['$scope','$http','Config','Alert', CarsCtrl]);

    function CarsCtrl($scope, $http, Config, Alert) {

        $http.get(Config.url + '/cars')
            .success(function(data, status, headers, config) {
                $scope.cars = data;
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Can't fetch car data");
            });
}




