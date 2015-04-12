'use strict';

angular.module('userApp', ['ui.router', 'ngAnimate', 'ngResource'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    //$httpProvider.interceptors.push('TokenInterceptor');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            title: 'Home',
            controller: "HomeCtrl"
        })
        .state('users', {
            url: '/users',
            templateUrl: 'views/users.html',
            title: 'Users',
            controller: "UsersCtrl"
        })
        .state('addUser', {
            url: '/add-user',
            templateUrl: 'views/manage-user.html',
            title: 'Add New User',
            controller: "AddEditUserCtrl"
        })
        .state('editUser', {
            url: '/users/:userId/edit',
            templateUrl: 'views/manage-user.html',
            title: 'Edit User',
            controller: "AddEditUserCtrl"
        });

        $urlRouterProvider.otherwise('/users');

})
.run(function( $rootScope, $state, $window) {
    $rootScope.isViewLoading = false;

    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        $rootScope.isViewLoading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
        $rootScope.isViewLoading = false;
        $rootScope.pageTitle = $state.current.title;
    });
});
