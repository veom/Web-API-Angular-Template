﻿angularAppControllers.controller('registerCtrl', ['$scope', '$location', 'authService', 'localStorageService', function ($scope, $location, authService, localStorageService) {

    $scope.registerData = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    $scope.message = [];

    $scope.register = function () {
        $scope.spinner = true;
        authService.saveRegistration($scope.registerData).then(function (response) {
            $scope.spinner = false;
            $location.path('/');
        },
         function (err) {
             $scope.spinner = false;
             var data = err.data.ModelState

             angular.forEach(data, function (value, key) {
                 $scope.message.push(value[0]);
             });
         });
    };
    
}]);