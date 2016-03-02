'use strict';

var app = angular.module('pfapp', ['ngRoute']);

//setTimeout(
//    function asyncBootstrap() {
//        angular.bootstrap(document, ["pfapp"]);
//    }, (2 * 1000)
//);

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
        .otherwise({
            redirectTo: '/'
        });;
});
