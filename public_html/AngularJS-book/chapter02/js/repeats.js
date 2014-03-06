'use strict';

var repeatsAppModule = angular.module('repeatsApp', []);

var students = [{name: 'Mary Contrary', id: '1'},
                {name: 'Jack Sprat', id: '2'},
                {name: 'Jill Hill', id: '3'}];

var album = [{name: 'Southwest Serenade', duration: '2:34'},
             {name: 'Northern Light Waltz', duration: '3:21'},
             {name: 'Eastern Tango', duration: '17:45'}];
             
repeatsAppModule.controller('StudentListController', function ($scope) {
    $scope.students = students;
    
    $scope.insertTom = function () {
        $scope.students.splice(1, 0, {name: 'Tom Thumb', id: '4'});
    };
}).controller('AlbumController', function ($scope) {
    $scope.album = album;
}).controller('DeathrayMenuController', function ($scope) {
    $scope.menuState = {show: false};
    $scope.isDisabled = false;
    
    $scope.toggleMenu = function () {
        $scope.menuState.show = !$scope.menuState.show;
    };
    $scope.stun = function () {
        $scope.isDisabled = 'true';
        $scope.actionResult = 'enemy is stunned';
    };
    $scope.disintegrate = function () {
        $scope.isDisabled = false;
        $scope.actionResult = 'enemy was disintegrate';
    };
    $scope.erase = function () {
        $scope.isDisabled = false;
        $scope.actionResult = 'enemy was erased from the history forever';
    };
}).controller('HeaderController', function($scope) {
    $scope.messageText = 'Here is no errors';
    $scope.isError = false;
    $scope.isWarning = false;
    $scope.showError = function() {
        $scope.messageText = 'This is an error!';
        $scope.isError = true;
        $scope.isWarning = false;
    };
    $scope.showWarning = function() {
        $scope.messageText = 'Just a warning. Please carry on.';
        $scope.isError = false;
        $scope.isWarning = true;
    };
    $scope.reset = function() {
        $scope.messageText = 'No warnings, no errors';
        $scope.isError = false;
        $scope.isWarning = false;
    };
}).controller('RestaurantTableController', function($scope) {
    $scope.directory = [{name: "The Handsome Heifer", cuisine: "BBQ"},
                        {name: "Green's Green Greens", cuisine: "Salads"},
                        {name: "House of Fine Fish", cuisine: "Seafood"}];
    $scope.selectRestaurant = function(row) {
        $scope.selectedRow = row;
    };
});