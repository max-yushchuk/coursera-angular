(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.found = [];

    ctrl.getMenuItems = function(searchTerm) {
      MenuSearchService.getMatchedMenuItems(searchTerm).then(function(response) {
        ctrl.found = response;
        ctrl.check = false;
        if (!ctrl.found.length) {
          ctrl.check = true;
        }
      });
    };

    ctrl.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        check: '<',
        onRemove: '&'
      },
      controller: function() {},
      controllerAs: 'ctrl',
      bindToController: true
    };
    return ddo;
  }
  
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (result) {
        service.foundItems = result.data.menu_items;
        if (searchTerm) {
          // process result and only keep items that match
          service.foundItems = service.foundItems.filter(function(item) {
            if (item.description.indexOf(searchTerm) != -1) {
              return item.description;
            }
          });
          return service.foundItems;
        }
        return [];
      });
    };

    service.removeItem = function (itemIndex) {
      service.foundItems.splice(itemIndex, 1);
    };
    
  }  
})();