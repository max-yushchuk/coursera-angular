(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    var convertString = function(input) {
      var inputArray = input.split(',');
      var outputArray = [];
      inputArray.forEach(function(item) {
        item = item.trim();
        if (item != '') outputArray.push(item);
      });
      return outputArray;
    }

    $scope.check = function(dishes) {
      
      if (dishes !== '' && dishes !== undefined) {
        var dishes = convertString(dishes);

        if (dishes.length <= 3) $scope.result = 'Enjoy!';
        else $scope.result = 'Too much!';
      } else $scope.result = 'Please enter data first';
    }
  }
})();