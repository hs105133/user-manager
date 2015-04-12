'use strict';
angular.module('userApp').controller('UsersCtrl', function($scope, $state, UserService) {

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
    ['Sort', function ($itemScope) {
        $scope.items.splice($itemScope.$index, 1);
    }],
    ['Deactivate', function ($itemScope) {
        $scope.items.splice($itemScope.$index, 1);
    }]
];

    $scope.users = UserService.query(function(){

    }, function(){
    	$scope.users = [
    		{ firstName: "Hemant", lastName: "Singh", email: "hemant@gmail.com", phone: 7799333224, state: true },
    		{ firstName: "Vinay", lastName: "Mourya", email: "vinay@gmail.com", phone: 7799333224, state: true },
    		{ firstName: "Varun", lastName: "Gupta", email: "varun@gmail.com", phone: 7799333224, state: false }
    	];
    });
});
