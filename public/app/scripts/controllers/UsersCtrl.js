'use strict';
angular.module('userApp').controller('UsersCtrl', function($scope, $state, $filter, UserService) {

	$scope.menuOptions = [
    ['Edit', function ($itemScope) {
        $state.go('editUser', {userId: $itemScope.user.id });
    }],
    // null, // Dividier
    ['Remove', function ($itemScope) {
        UserService.remove({userId: $itemScope.user.id }, function(){
            $scope.users.splice($itemScope.$index, 1);
        });     
    }],
    ['Deactivate', function ($itemScope) {
        UserService.update({id: $itemScope.user.id, status: false }, function(res){
            $scope.users[$itemScope.$index].status = res.status;
        });
    }]
];

    $scope.users = UserService.query(function(){

    }, function(){
        // should be removed
    	$scope.users = [
    		{ id: 1, firstName: "Hemant", lastName: "Singh", email: "hemant@gmail.com", phone: 7799333224, state: true },
    		{ id: 2, firstName: "Vinay", lastName: "Mourya", email: "vinay@gmail.com", phone: 7799333224, state: true },
    		{ id: 3, firstName: "Varun", lastName: "Gupta", email: "varun@gmail.com", phone: 7799333224, state: false }
    	];
    });
});
