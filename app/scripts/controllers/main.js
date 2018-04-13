'use strict';

/**
 * @ngdoc function
 * @name profilioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the profilioApp
 */
angular.module('profilioApp')
  .controller('MainCtrl',['$scope', '$translate', function ($scope,$translate) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $translate('MYNAME').then(function (title) {
      console.log("title");
      $scope.title=title;
    }, function (translationId) {
      $scope.title=translationId;
      console.log(translationId);
    });
  }]);
