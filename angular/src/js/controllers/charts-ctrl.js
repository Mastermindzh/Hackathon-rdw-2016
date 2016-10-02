
app.controller('ChartsCtrl', ['$scope','$http','$rootScope','Config','Alert', ChartsCtrl]);

function ChartsCtrl($scope, $http,$rootScope, Config, Alert) {
    $scope.labels = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli"];
    $scope.series = ['Ingediende onderdelen', 'Opvallende Gebruikersgegevens'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };


    $scope.labels2 = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli"];
    $scope.series2 = ['Politieverzoeken', 'Bedrijfsverzoeken'];
    $scope.data2 = [
        [23, 34, 22, 14, 52, 32, 1],
        [13, 66, 32, 35, 12, 31, 10]
    ];
    $scope.onClick2 = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride2 = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options2 = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };
}





