'use strict';

/* App Module */

angular.module('responsiporo', ['tomatoFilters', 'tomatoServices','ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/tomato', {templateUrl: 'templates/main.html',   controller: TomatoListCtrl}).
	      otherwise({redirectTo: '/tomato'});
}]).directive('task', function () {
	return {
	    restrict: 'E',
	    scope: {},
	    templateUrl: 'templates/task.html',
	    controller: function ($scope, $http, $attrs) {
	    	console.log($attrs);
	    }
	}
});
