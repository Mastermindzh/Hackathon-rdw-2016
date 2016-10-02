
app.controller('CarEditCtrl', ['$scope','$stateParams', '$http','$interval','Config','Alert', '$window', CarEditCtrl]);

    function CarEditCtrl($scope, $stateParams,$http, $interval, Config, Alert, $window) {
        console.log($stateParams.id);


        $http.get(Config.url + '/cars/' + $stateParams.id)
            .success(function(data, status, headers, config) {
                $scope.car =  data;
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Auto data kan niet worden opgehaald.");
            });
        $scope.addData = function(inputveld) {
            $http({
                url: Config.url + '/maintenance/add',
                method: "POST",
                data: { 'description' : inputveld, 'Car_id' : $stateParams.id }
            })
                .then(function(response) {
                        $window.location.href = '#/cars/';
                        Alert.addAlert("success","fa-check","Onderhoud is toegevoegd voor controle.");
                    },
                    function(response) { // optional
                        Alert.addAlert("danger","fa-exclamation-triangle","Verwijderen is niet gelukt. Probeer het later opnieuw.");
                    });
        }
    }




