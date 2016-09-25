(function(){
'use strict'

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var showToBuyList = this;

  showToBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  showToBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var showBoughtList = this;
  showBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of bought Items
  var boughtItems = [];

  // List of buy Items
   var toBuyItems = [
    {'name': 'itemName1', 'quantity': 1},
    {'name': 'itemName2', 'quantity': 2},
    {'name': 'itemName3', 'quantity': 3},
    {'name': 'itemName4', 'quantity': 4},
    {'name': 'itemName5', 'quantity': 5},
    {'name': 'itemName6', 'quantity': 6},
    {'name': 'itemName7', 'quantity': 7}
];

  service.buyItem = function (itemIdex) {
    boughtItems.push(toBuyItems[itemIdex]);
    toBuyItems.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}


})();
