var repeatsAppModule = angular.module('repeatsApp', []);

var students = [{name:'Mary Contrary', id:'1'}, 
                {name:'Jack Sprat', id:'2'}, 
                {name:'Jill Hill', id:'3'}];
            
repeatsAppModule.controller('StudentListController', function($scope) {
    $scope.students = students;
});