angular.module('myApp.Controller', [])
    .controller('loginController', function ($scope) {        
        $scope.CheckLoginUser = function () {        
        if ($scope.username.Trim() == "nosql" && $scope.password.Trim() == "html5") {
                alert('Welcome to hell');
            }
            else {
            alert('You cannot survive in hell :D');
            }
        }
    })
