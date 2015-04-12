'use strict';

angular.module('userApp')
	.controller('HomeCtrl', function($scope, $location, $rootScope) {
   		$scope.$emit("hideNavbar");
	});
