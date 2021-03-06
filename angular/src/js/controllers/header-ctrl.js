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
            case "/cars/1":
                $scope.currentPage = "Mijn voertuig details";
                break;
            case "/cars/2":
                $scope.currentPage = "Mijn voertuig details";
                break;
            case "/cars/3":
                $scope.currentPage = "Mijn voertuig details";
                break;
            case "/cars/details/edit/1":
                $scope.currentPage = "Mijn voertuig aanpassen";
                break;
            case "/cars/details/edit/2":
                $scope.currentPage = "Mijn voertuig aanpassen";
                break;
            case "/cars/details/edit/3":
                $scope.currentPage = "Mijn voertuig aanpassen";
                break;
            case "/approval":
                $scope.currentPage = "Aanpassingen goedkeuren";
                break;
            case "/addfeature":
                $scope.currentPage = "Auto kenmerk toevoegen";
                break;
            default:
                $scope.currentPage = "Inloggen";
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