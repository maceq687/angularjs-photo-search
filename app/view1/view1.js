"use strict";

angular
  .module("myApp.view1", ["ngRoute", "ngMaterial"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1", {
        templateUrl: "view1/view1.html",
        controller: "View1Ctrl",
      });
    },
  ])

  .controller(
    "View1Ctrl",
    function ($scope, $rootScope, $http, __env, $mdDialog) {
      $scope.dataSource = [];
      $scope.loaded = false;
      $rootScope.totalPages = 1;
      $rootScope.perPage = 10;
      $rootScope.orderBy = "relevant";

      $scope.search = function () {
        $http
          .get(
            __env.apiUrl +
              "/search/photos?client_id=" +
              __env.apiKey +
              "&query=" +
              $rootScope.searchTerm +
              "&page=" +
              $scope.pageNumber +
              "&per_page=" +
              $scope.perPage +
              "&order_by=" +
              $scope.orderBy
          )
          .then(
            function successCallback(response) {
              $rootScope.dataSource = response.data.results;
              $rootScope.totalPages = response.data.total_pages;
              $scope.loaded = true;
            },
            function errorCallback(err) {
              $mdDialog.show(
                $mdDialog
                  .alert()
                  .parent(
                    angular.element(document.querySelector("#popupContainer"))
                  )
                  .clickOutsideToClose(true)
                  .title("Error")
                  .textContent(
                    "An error has occurred. Error (" +
                      err.status +
                      "): " +
                      err.statusText
                  )
                  .ariaLabel("Alert Dialog")
                  .ok("Ok")
              );
            }
          );
      };
    }
  );
