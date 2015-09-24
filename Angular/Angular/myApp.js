angular.module('myApp', ['ui.router', 'myApp.Controller'])
.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
        })
    .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'templates/aboutus.html'
    })
    .state('contactus', {
        url: '/contactus',
        templateUrl: 'templates/contactus.html'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller:'loginController'
    })
}])