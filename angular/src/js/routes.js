'use strict';

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('cars', {
                url: '/cars',
                templateUrl: 'templates/car_overview.html'
            }).state('cardetails', {
            url: '/cars/details',
            templateUrl: 'templates/car_details.html'
            }).state('caredit', {
            url: '/cars/details/edit',
            templateUrl: 'templates/car_edit.html'
        })
    }
]);