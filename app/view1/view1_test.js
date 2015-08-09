'use strict';

describe('myApp.view1 module', function() {

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function(){

        it('should be defined', inject(function($controller, $rootScope, $log, $http) {
            //spec body
            var view1Ctrl = $controller('View1Ctrl', {
                '$scope': $rootScope.$new(),
                '$log': $log,
                '$http': $http
            });
            expect(view1Ctrl).toBeDefined();
        }));

    });
});
