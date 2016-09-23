(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.buyArray = ShoppingListCheckOffService.getBuyList();

    toBuy.addToBought = function(input) {
      ShoppingListCheckOffService.addBought(input);
    }
  }
  
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.boughtArray = ShoppingListCheckOffService.getBoughtList();
  }
  
  function ShoppingListCheckOffService() {
    var service = this;
    var boughtList = [];
    var buyList = [
                  {
                    name: 'Cookies',
                    quantity: 10
                  },
                  {
                    name: 'Chips',
                    quantity: 8
                  },
                  {
                    name: 'Cakes',
                    quantity: 3
                  },
                  {
                    name: 'Sweets',
                    quantity: 5
                  },
                  {
                    name: 'Ices',
                    quantity: 4
                  },
                  {
                    name: 'Candies',
                    quantity: 7
                  }
                ];
    
    service.getBuyList = function() {
      return buyList;
    }

    service.getBoughtList = function() {
      return boughtList;
    }

    service.addBought = function(input) {
      boughtList.push(buyList[input]);
      buyList.splice(input, 1);
    }
  }  
})();