'use strict';

/* Controllers */

var tabsViewControllers = angular.module('tabsViewControllers', []);

// TabsCtrl manages tabs

tabsViewControllers.controller('TabsCtrl', ['$scope', '$routeParams', '$filter',
    function($scope, $routeParams, $filter) {

        // default values for tab object

        $scope.defaultTitle       = 'TITLE';
        $scope.defaultDescription = 'Click on this field and write description. Press enter if you want to stop editing.';

        $scope.tabs = [];

        // check if tab should be selected

        $scope.isSelected = function(tabId, $first) {
            if (!$scope.activeTab && $first){
                $scope.selectTab(tabId);
            }
            return $scope.activeTab === tabId;
        };

        // select chosen tab

        $scope.selectTab = function (tabId){
            if (!tabId && $scope.tabs.length) {
                tabId = $scope.tabs[0].id;
            }
            $scope.activeTab = tabId;
        };

        // add new tab object into tabs array

        $scope.addTab = function() {
           $scope.tabs.push({id: Math.uuid(), title: $scope.defaultTitle, description: $scope.defaultDescription});
        };

        // remove tab

        $scope.deleteTab = function(tabId, event) {
            event.preventDefault();
            $scope.tabs = $filter('filter')($scope.tabs, {id: '!' + tabId});
            $scope.selectTab();
        };
}]);

// ContentCtrl manages content inside tabs

tabsViewControllers.controller('ContentCtrl', ['$scope', '$routeParams', '$filter',
    function($scope) {

        // change value of title if it is empty

        $scope.validateTitle = function(editTitle, event) {
            if (event.which === 13) {
                var text = event.target.value;
                $scope.title = text || $scope.defaultTitle;
                $scope.editTitle = ! editTitle;
            }
        };

        // change value of description if it is empty

        $scope.validateDescription = function(editDescription, event) {
            if (event.which === 13) {
                var text = event.target.value;
                $scope.description = text || $scope.defaultDescription;
                $scope.editDescription = ! editDescription;
            }
        }
    }]);


