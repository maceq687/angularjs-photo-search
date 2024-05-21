angular
  .module("myApp.view1")
  .component("paging", {
    templateUrl: "paging.html",
    controller: "PagingCtrl",
  })

  .controller("PagingCtrl", function ($scope, $rootScope) {
    $rootScope.pageNumber = 1;
    $scope.perPage = $rootScope.perPage;
    $scope.orderBy = $rootScope.orderBy;
    $scope.ranges = [10, 20, 30];
    $scope.orders = ["relevant", "latest"];

    $scope.search = $scope.$parent.search;

    $scope.onRangeChange = function (value) {
      $rootScope.perPage = value;
      $scope.search();
    };

    $scope.onOrderChange = function (value) {
      $rootScope.orderBy = value;
      $scope.search();
    };

    $scope.nextPage = function () {
      $rootScope.pageNumber = $rootScope.pageNumber + 1;
      $scope.search();
    };

    $scope.previousPage = function () {
      $rootScope.pageNumber = $rootScope.pageNumber - 1;
      $scope.search();
    };

    $scope.firstPage = function () {
      $rootScope.pageNumber = 1;
      $scope.search();
    };
  });
