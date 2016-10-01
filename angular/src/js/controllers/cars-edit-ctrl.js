
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
                data: { 'message' : inputveld }
            })
                .then(function(response) {
                        $window.location.href = '#/cars/';

                    },
                    function(response) { // optional
                        console.log("faal");
                    });
        }
    }




