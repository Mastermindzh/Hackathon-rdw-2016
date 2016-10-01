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
            case "/cars/details":
                $scope.currentPage = "Mijn voertuig details";
                break;
            case "/cars/details/edit":
                $scope.currentPage = "Mijn voertuig aanpassen";
                break;
            case "/approval":
                $scope.currentPage = "Aanpassingen goedkeuren";
                break;
            case "/addfeature":
                $scope.currentPage = "Auto feature toevoegen";
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