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
    
    $scope.toggleMenu = function () {
        $scope.menuState.show = !$scope.menuState.show;
    };
    $scope.stun = function () {
        $scope.actionResult = 'enemy is stunned';
    };
    $scope.disintegrate = function () {
        $scope.actionResult = 'enemy was disintegrate';
    };
    $scope.erase = function () {
        $scope.actionResult = 'enemy was erased from the history forever';
    };
});