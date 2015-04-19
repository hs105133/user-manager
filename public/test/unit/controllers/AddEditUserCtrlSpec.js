describe('Unit: Add/Edit Users Form Contoller - AddEditUserCtrl', function() {
    // Load the module with MainController
    beforeEach(module('userApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('AddEditUserCtrl', {
            $scope: scope
        });
    }));

    // Testing the FrameController values
    it('should have resetForm function defined', function() {
        expect(scope.resetForm).toBeDefined();
    });

    it('should have user object', function() {
        expect(scope.user).toBeObject();
    });

});
