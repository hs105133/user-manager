'use strict';
angular.module('userApp').controller('AddEditUserCtrl', function($scope, $state, $stateParams, UserService) {
   $scope.stringPattern = /^[A-Za-z\s]+$/;
   $scope.phonePattern = /^\d{10}$/;
   $scope.user = {};


   var userId = $stateParams.userId,
       origUser = angular.copy($scope.user);


   if(userId){
      $scope.user = UserService.get({id: userId}, function(res){
         origUser = angular.copy(res);
      });
   }

   $scope.addEditUser = function(user){
      if(userId){
         UserService.update(user, function(res){
            $state.go("users");
         }); 
      } else {
         UserService.save(user, function(res){
            $state.go("users");
         });         
      }

   };


    $scope.resetForm = function (){
      console.log(origUser);
      $scope.user = angular.copy(origUser);
      $scope.userForm.$setPristine();
    };



});
