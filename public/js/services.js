'use strict';

/* Services */

angular.module('tomatoServices', ['ngResource']).
factory('Deployd', function ($rootScope) {
  return {
    on: function (eventName, callback) {
      dpd.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
        	//console.log(args);
          callback.apply(dpd, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      dpd.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(dpd, args);
          }
        });
      })
    }
  };
});
 