'use strict';

/* Filters */

angular.module('tomatoFilters', [])

/**
 * This filter returns an object only if today is true
 * @return {[type]} [description]
 */
.filter('isToday', function() {
  return function(input) {
  	console.log(input);

  	return input;

  };
});

