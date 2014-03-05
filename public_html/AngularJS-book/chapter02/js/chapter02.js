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
    
    $scope.computeNeeded = function() {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
});
