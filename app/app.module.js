'use strict';

// Declare app level module which depends on views, and components
var tabsViewApp = angular.module('tabsViewApp', [
  'ngRoute',
  'tabsViewControllers'
]).config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/tabs', {
                templateUrl: 'app/custom_components/home/homeView.html',
                controller: 'TabsCtrl'
            }).
            otherwise({
                redirectTo: '/tabs'
            });
    }]);