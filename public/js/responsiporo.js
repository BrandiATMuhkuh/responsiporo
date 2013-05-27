'use strict';

/* App Module */

angular.module('responsiporo', ['tomatoFilters', 'tomatoServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/tomato', {templateUrl: 'templates/main.html',   controller: TomatoListCtrl}).
      otherwise({redirectTo: '/tomato'});
}]);