/**
 * Header controller
 */

app.controller('HeaderCtrl', ['$scope','$rootScope','$location','Config','$http', HeaderCtrl]);

function HeaderCtrl($scope,$rootScope,$location,Config,$http) {

    $scope.update = function() {
        var url = $location.url();

        switch(url){
            case "/cars":
                $scope.currentPage = "Mijn voertuigen";
            break;
            case "/cardetails":
                $scope.currentPage = "Mijn voertuig details";
                break;
            default:
                $scope.currentPage = "Login";
            break;
        }

        $scope.crumbs = [];
        $scope.crumbs = url.split("/");
    };


    $scope.update();

    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
        $scope.update();
    })



}