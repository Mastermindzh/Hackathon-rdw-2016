/**
 * CPU Controller
 */

app.controller('ApprovalsCtrl', ['$scope','$http','$rootScope','$stateParams','Config','Alert', ApprovalsCtrl]);

    function ApprovalsCtrl($scope, $http,$rootScope,$stateParams, Config, Alert) {

        $scope.username = $rootScope.username;
        $scope.maintenance;
        $scope.features;

        $http.get(Config.url + '/maintenance/notapproved')
            .success(function(data, status, headers, config) {
                $scope.maintenance =  data;
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Can't fetch car data");
            });

        $http.get(Config.url + '/maintenance/notapprovedfeatures')
            .success(function(data, status, headers, config) {
                $scope.features =  data;
            })
            .error(function(data, status, headers, config) {
                Alert.addAlert("danger","fa-exclamation-triangle","Can't fetch car features");
            });

        $scope.approve = function(id){
            $http({
                url: Config.url + '/maintenance/approve',
                method: "POST",
                data: { 'id' : id }
            })
                .then(function(response) {
                        Alert.addAlert("success","fa-check","Maintenance with id: " +id + " approved!");
                        for(i=0;i<$scope.maintenance.length;i++){
                            if($scope.maintenance[i].id == id){
                                $scope.maintenance.shift();
                            }
                        }
                    },
                    function(response) { // optional
                        Alert.addAlert("danger","fa-exclamation-triangle","Failed to approve");
                    });
        }
        $scope.approveFeature = function(id){
            $http({
                url: Config.url + '/maintenance/approveFeature',
                method: "POST",
                data: { 'id' : id }
            })
                .then(function(response) {
                        Alert.addAlert("success","fa-check","Feature with id: " +id + " approved!");
                        for(i=0;i<$scope.features.length;i++){
                            if($scope.features[i].id == id){
                                $scope.features.shift();
                            }
                        }
                    },
                    function(response) { // optional
                        Alert.addAlert("danger","fa-exclamation-triangle","Failed to approve");
                    });
        }

    }




