(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'ProfileService'];
function SignUpController(MenuService, ProfileService) {
  var signCtrl = this;

  signCtrl.successSubmit = false;
  signCtrl.checkFavouriteDish = false;

  signCtrl.submitForm = function(input) {
    MenuService.getItem(input.favouriteDish).then(function(response) {
      signCtrl.successSubmit = true;
      
      ProfileService.setProfileInfo(input);
      signCtrl.user = {};
      signCtrl.regForm.$setPristine();
      signCtrl.regForm.$setUntouched();
    }, function(error) {
      signCtrl.checkFavouriteDish = true;
    });

  }
}

})();
