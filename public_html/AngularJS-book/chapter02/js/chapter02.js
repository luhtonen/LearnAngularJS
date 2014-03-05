var myAppModule = angular.module('myApp', []);

myAppModule.controller('TextController',
function($scope) {
    var someText = {};
    someText.message = 'You have started your journey';
    $scope.someText = someText;
    $scope.greeting = 'Hi there';
})
.controller('SomeController', function($scope) {
    $scope.youCheckedIt = true;
})
.controller('StartUpController', function($scope) {
    $scope.funding = { startingEstimate: 0 };
    
    computeNeeded = function() {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
    
    $scope.$watch('funding.startingEstimate', computeNeeded);
})
.controller('AnotherStartUpController', function($scope) {
    $scope.anotherComputeNeeded = function() {
        $scope.anotherNeeded = $scope.anotherStartingEstimate * 10;
    };
    $scope.requestFunding = function() {
        window.alert("Sorry, please get more customers first.");
    };
    $scope.reset = function() {
        $scope.anotherStartingEstimate = 0;
    };
});
