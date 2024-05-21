angular
  .module("myApp.view1")
  .component("search", {
    templateUrl: "search.html",
    controller: "SearchCtrl",
  })

  .controller("SearchCtrl", function ($scope, $rootScope) {
    $scope.searchTerm = "";

    $scope.search = $scope.$parent.search;

    $scope.submit = function () {
      if (!$scope.searchTerm) {
        return;
      }
      $rootScope.searchTerm = $scope.searchTerm;
      $rootScope.loaded = false;
      $rootScope.pageNumber = 1;
      $scope.search();
    };
  });
