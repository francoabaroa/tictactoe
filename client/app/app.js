angular.module('ttt', [])
  .controller('mainCtrl', function ($scope) {
    $scope.input1 = 'click me';
    $scope.input2 = 'click me';
    $scope.input3 = 'click me';
    $scope.input4 = 'click me';
    $scope.input5 = 'click me';
    $scope.input6 = 'click me';
    $scope.input7 = 'click me';
    $scope.input8 = 'click me';
    $scope.input9 = 'click me';

    $scope.results = [];


    $scope.test1 = function () {
      $scope.input1 = prompt('X or O?');
    }

    $scope.test2 = function () {
      $scope.input2 = prompt('X or O?');
    }

    $scope.test3 = function () {
      $scope.input3 = prompt('X or O?');
    }

    $scope.test4 = function () {
      $scope.input4 = prompt('X or O?');
    }

    $scope.test5 = function () {
      $scope.input5 = prompt('X or O?');
    }

    $scope.test6 = function () {
      $scope.input6 = prompt('X or O?');
    }
    $scope.test7 = function () {
      $scope.input7 = prompt('X or O?');
    }

    $scope.test8 = function () {
      $scope.input8 = prompt('X or O?');
    }

    $scope.test9 = function () {
      $scope.input9 = prompt('X or O?');
    }

  });