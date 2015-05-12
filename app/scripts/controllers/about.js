'use strict';

/**
 * @ngdoc function
 * @name mapPocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mapPocApp
 */
angular.module('mapPocApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
