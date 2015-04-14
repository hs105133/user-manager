'use strict';

angular.module('userApp', ['ui.router', 'ngAnimate', 'ngResource'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    //$httpProvider.interceptors.push('TokenInterceptor');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            title: 'Home'
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

    $rootScope.$on('$stateChangeStart', function(event, nextRoute, currentRoute) {
        $rootScope.isViewLoading = true;
        if(nextRoute.name === "home"){
            $rootScope.hideNavbar = true;
        } else {
            $rootScope.hideNavbar = false;
        }
    });

    $rootScope.$on('$stateChangeSuccess', function(event, next, current) {
        $rootScope.isViewLoading = false;
        $rootScope.pageTitle = $state.current.title;
    });
});
