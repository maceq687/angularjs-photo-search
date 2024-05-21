"use strict";

var env = {};

if (window) {
  Object.assign(env, window.__env);
}

var ngModule = angular.module("myApp", ["ngRoute", "myApp.view1"]).config([
  "$locationProvider",
  "$routeProvider",
  function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");

    $routeProvider.otherwise({ redirectTo: "/view1" });
  },
]);

ngModule.constant("__env", env);
