(function () {
"use strict";

angular.module('common')
.service('ProfileService', ProfileService);

ProfileService.$inject = ['$http', 'ApiPath', 'MenuService'];
function ProfileService($http, ApiPath, MenuService) {
  var service = this;
  var formInfo = {};

  service.setProfileInfo = function (input) {
    formInfo = input;
  };

  service.getProfileInfo = function () {
    return formInfo;
  };
}
})();
