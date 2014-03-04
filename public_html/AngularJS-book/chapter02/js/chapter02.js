var myAppModule = angular.module('myApp', []);

myAppModule.controller('TextController',
function($scope) {
    var someText = {};
    someText.message = 'You have started your journey';
    $scope.someText = someText;
    $scope.greeting = 'Hi there';
});
