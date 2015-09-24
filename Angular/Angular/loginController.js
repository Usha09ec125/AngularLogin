angular.module('myApp.Controller', [])
    .controller('loginController', function ($scope) {        
        $scope.CheckLoginUser = function () {        
        if ($scope.username == "nosql" && $scope.password== "html5") {
                alert('Welcome to hell');
            }
            else {
            alert('You cannot survive in hell :D');
            }
        }
    })
