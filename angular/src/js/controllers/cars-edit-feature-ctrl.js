
app.controller('CarEditFeature', ['$scope','$http','$stateParams','$interval','Config','Alert', '$window', CarEditFeature]);

    function CarEditFeature($scope, $http, $stateParams,$interval, Config, Alert, $window) {
        $scope.addData = function(inputveld) {
            $http({
                url: Config.url + '/maintenance/addFeature',
                method: "POST",
                data: { 'description' : inputveld, 'Car_id' : $stateParams.id }
            })
                .then(function(response) {
                        $window.location.href = '#/cars/';
                        Alert.addAlert("success","fa-check","Kenmerk toegevoegd voor controle.");
                    },
                    function(response) { // optional
                        Alert.addAlert("danger","fa-exclamation-triangle","Het verwijderen is niet gelukt. Probeer het later opnieuw.");
                    });
        }
    }




