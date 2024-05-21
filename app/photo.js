angular
  .module("myApp.view1")
  .component("photo", {
    templateUrl: "photo.html",
    controller: "PhotoCtrl",
    bindings: {
      photoData: "=",
    },
  })

  .controller("PhotoCtrl", function () {});
