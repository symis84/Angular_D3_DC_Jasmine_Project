describe("app module", function () {
    beforeEach(module("assignment"));

    describe("ReportingController", function () {
        var scope,
            controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("title should be equal to Today Report", function () {
            controller("ReportingController", {$scope: scope});
            expect(scope.hello).toBe("Today Report");
        });

        it("myData should return an array of items", function(){
            controller("ReportingController", {$scope: scope});
            expect(scope.myData).toBeDefined();
        });

        it("currentPage should not be null", function() {
            controller("ReportingController", {$scope: scope});
            expect(scope.currentPage).not.toBe(null);
        });

        it("totalItems should not be null", function() {
            controller("ReportingController", {$scope: scope});
            expect(scope.totalItems).not.toBe(null);
        });
       
    });
});