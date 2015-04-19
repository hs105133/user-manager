describe('Routes test', function() {
    // Mock our module in our tests
    beforeEach(module('userApp'));
    var location, $state, rootScope;
    beforeEach(inject(
        function(_$location_, _$state_, _$rootScope_, $templateCache) {
            location = _$location_;
            $state = _$state_;
            $rootScope = _$rootScope_;

            $templateCache.put('views/users.html', '');
        }));

    describe('index route', function() {
            beforeEach(inject(
                function($httpBackend) {
                    $httpBackend.expectGET('views/users.html')
                        .respond(200, 'Users HTML');
                }));

            it('should load the index page on successful load of /users',
                function() {
					$state.go("users");
				    $rootScope.$digest();
				    expect($state.current.name).toBe("users");
				    expect($state.current.controller).toBe('UsersCtrl');
                });

            it('should redirect to the index path "/users" on non-existent route ', function() {
                location.path('/definitely/not/a/_route'); 
                $rootScope.$digest(); 
                expect($state.current.controller).toBe('UsersCtrl');
            });
    });
});
