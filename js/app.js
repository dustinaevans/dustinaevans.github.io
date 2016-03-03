'use strict';

var app = angular.module('pfapp', ['ngRoute']);

app.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.menuactive = false;
    $scope.menu = function () {
        if ($scope.menuactive) {
            $scope.menuactive = false;
        } else {
            $scope.menuactive = true;
        }
    };
    $scope.idk = true;
}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/open.html',
            controller: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'mainCrtl'
        })
        .otherwise({
            redirectTo: '/'
        });;
});
