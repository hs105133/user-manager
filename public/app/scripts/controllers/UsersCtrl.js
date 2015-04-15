'use strict';
angular.module('userApp')
    .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'user', function($scope, $modalInstance, user) {
        $scope.ok = function() {
            $modalInstance.close(user);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }])
    .controller('UsersCtrl', function($scope, $state, $filter, $modal, UserService) {

        var confirmDelete = function($itemScope, size) {

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    user: function() {
                        return $itemScope.user;
                    }
                }
            });

            modalInstance.result.then(function(dUser) {
                UserService.remove({
                    userId: dUser.id
                }, function() {
                    $scope.users.splice($itemScope.$index, 1);
                });
            }, function() {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.menuOptions = [
            ['Edit', function($itemScope) {
                $state.go('editUser', {
                    userId: $itemScope.user.id
                });
            }],
            // null, // Dividier
            ['Remove', function($itemScope) {
                confirmDelete($itemScope, 'sm');
            }],
            ['Deactivate', function($itemScope) {
                UserService.update({
                    id: $itemScope.user.id,
                    status: false
                }, function(res) {
                    $scope.users[$itemScope.$index].status = res.status;
                });
            }]
        ];

        $scope.users = UserService.query(function() {

        }, function() {
            // should be removed
            $scope.users = [{
                id: 1,
                firstName: "Hemant",
                lastName: "Singh",
                email: "hemant@gmail.com",
                phone: 7799333224,
                state: true
            }, {
                id: 2,
                firstName: "Vinay",
                lastName: "Mourya",
                email: "vinay@gmail.com",
                phone: 7799333224,
                state: true
            }, {
                id: 3,
                firstName: "Varun",
                lastName: "Gupta",
                email: "varun@gmail.com",
                phone: 7799333224,
                state: false
            }];
        });
    });
