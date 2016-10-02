
app.controller('CarEditCtrl', ['$scope','$stateParams', '$http','$interval','Config','Alert', '$window', CarEditCtrl]);

    function CarEditCtrl($scope, $stateParams,$http, $interval, Config, Alert, $window) {
        console.log($stateParams.id);


        $http.get(Config.url + '/cars/' + $stateParams.id)
            .success(function(data, status, headers, config) {
                $scope.car =  data;
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Can't fetch car data");
            });
        $scope.addData = function(inputveld) {
            $http({
                url: Config.url + '/maintenance/add',
                method: "POST",
                data: { 'description' : inputveld, 'Car_id' : $stateParams.id }
            })
                .then(function(response) {
                        $window.location.href = '#/cars/';
                        Alert.addAlert("success","fa-check","Maintenance added for review");
                    },
                    function(response) { // optional
                        Alert.addAlert("danger","fa-exclamation-triangle","Failed to delete");
                    });
        }
    }




