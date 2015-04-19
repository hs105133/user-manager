describe('Unit: Users Contoller - UsersCtrl', function() {
    // Load the module with MainController
    beforeEach(module('userApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('UsersCtrl', {
            $scope: scope
        });
    }));

    // Testing the FrameController values
    it('should have users defined', function() {
        expect(scope.users).toBeDefined();
    });

});
