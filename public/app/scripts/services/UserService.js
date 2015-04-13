'use strict';
angular.module('userApp')
    .constant("BASE_URL", "https://hkapi.herokuapp.com/")
    .factory('UserService', function($resource,BASE_URL) {
        return $resource(BASE_URL+"msusers/:userId", {userId: "@id"}, { update: { method: 'put'} }); 
    });
