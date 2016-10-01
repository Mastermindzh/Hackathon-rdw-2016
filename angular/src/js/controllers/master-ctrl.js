/**
 * Master Controller
 */

app.controller('MasterCtrl', ['$scope', '$cookieStore','$rootScope', MasterCtrl]);

function MasterCtrl($scope, $cookieStore,$rootScope) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getName = function () {
        $scope.username = $rootScope.username;
    }

    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
        $scope.getName();
    })



    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }
    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };
}