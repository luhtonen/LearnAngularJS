var appModule = angular.module('focusApp', []);
appModule.controller('FocusController', function($scope) {
    $scope.message = { text: 'nothing clicked yet' };
    $scope.clickUnfocused = function() {
        $scope.message.text = 'unfocused button clicked';
    };
    $scope.clickFocused = function() {
        $scope.message.text = 'focus button clicked';
    };
});
appModule.directive('ngbkFocus', function() {
    return {
        link: function(scope, element, attrs, controller) {
            element[0].focus();
        }
    };
});