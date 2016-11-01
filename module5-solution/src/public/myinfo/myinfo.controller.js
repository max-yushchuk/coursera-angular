(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ProfileService', 'MenuService'];
function MyInfoController(ProfileService, MenuService) {
  var myinfoCtrl = this;

  myinfoCtrl.myInfo = ProfileService.getProfileInfo();
  myinfoCtrl.isRegistered = Object.keys(myinfoCtrl.myInfo).length;

  if (myinfoCtrl.isRegistered && typeof myinfoCtrl.myInfo.favouriteDish === 'string') {
    MenuService.getItem(myinfoCtrl.myInfo.favouriteDish).then(function(response) {
      myinfoCtrl.myInfo.favouriteDish = response;
    });
  }
}

})();
