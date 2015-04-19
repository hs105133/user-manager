"use strict";

describe("Unit: User Service", function () {
  var userService;

  beforeEach(module("userApp"));

  beforeEach(inject(function (_UserService_, $httpBackend) {
    userService = _UserService_;
  }));

  describe("CRUD with /users API", function () {

    it("should get list of users", function(){
      userService.query(function(res) {
        expect(res).toBeArray();
      }, function(){
        expect(res.length).toEqual(3);
      });
    });

    it("should get single user", function(){
      userService.get({id: "05c9c2216882b861"}, function(res) {
        expect(res).toBeObject();
        expect(res.email).toEqual("upendra@gmail.com");
      });
    });

    it("should add new user", function(){
      userService.save({firstName: "papa", lastName: "ss", email: "papa@gmail.com"}, function(res) {
        expect(res).toBeObject();
        expect(res.email).toEqual("papa@gmail.com");
      });
    });

    it("should update firstName of user Upendra to Upendra 1", function(){
      userService.update({id: "05c9c2216882b861", firstName:  "Upendra 1"}, function(res) {
        expect(res).toBeObject();
        expect(res.firstName).toEqual("Upendra 1");
      });
    });

    it("should remove user", function(){
      userService.remove({id: "05c9c2216882b861"}, function(res) {
        expect(res).toBeFalsy();
      });
    });
  });

});