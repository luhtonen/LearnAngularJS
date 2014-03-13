var myFormModule = angular.module('myFormApp', []);

myFormModule.controller('AddUserController', function($scope) {
    $scope.message = '';
    $scope.addUser = function() {
        // TODO: save user data
        $scope.message = 'Thanks, ' + $scope.user.first + ', we added you!';
    };
});