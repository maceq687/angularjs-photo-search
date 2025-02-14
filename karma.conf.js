//jshint strict: false
module.exports = function (config) {
  config.set({
    basePath: "./app",

    files: ["lib/angular/angular.js", "view*/**/*.js"],

    exclude: ["view*/**/*.spec.js"],

    autoWatch: true,

    frameworks: ["jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
    ],
  });
};
