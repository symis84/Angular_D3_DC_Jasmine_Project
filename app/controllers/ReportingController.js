app.controller('ReportingController', function($scope, reportingModel) {
    var updateItems = function() {
        $scope.pagedItems = reportingModel.countries.slice($scope.itemsPerPage * ($scope.currentPage - 1), $scope.itemsPerPage * $scope.currentPage);
    };

    $scope.currentPage = 1;
    $scope.totalItems = reportingModel.countries.length;
    $scope.itemsPerPage = 10;
    $scope.numPages = 0;
    $scope.hello = 'Today Report';

    $scope.selectItemsPerPage = function(itemNo) {
        $scope.itemsPerPage = itemNo;
        updateItems();
    };

    $scope.setPage = function(pageNo) {
        $scope.currentPage = (pageNo === -1) ? $scope.numPages : pageNo;
        updateItems();
    };

    $scope.$watch('currentPage', function() {
        updateItems();
    });

    $scope.pagedItems = [];

    $scope.myData = reportingModel.today;

});







