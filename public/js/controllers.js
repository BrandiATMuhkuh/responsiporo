'use strict';

/* Controllers */

/**
 * This is the main controller for the synchronisation. It uses socket.io an listens to any change on the server. 
 * The Controller is also used during the start sequence to get all data from the server.
 * @param {Object} $scope
 * @param {Object} $http
 * @param {Object} Deployd
 */
function TomatoListCtrl($scope, $http, Deployd) {

	/**
	 * Test
	 * @param  {Object} result
	 * @param  {Object} err
	 * @return {Object}
	 */
	dpd.phones.get(function (result, err) {
	  if(err) return console.log(err);

	  $scope.tomatos = result;
	  $scope.$apply(result);

	  console.log(result);
	});


	/**
	 * Test
	 * @param  {Object} results
	 * @return {Object}
	 */
	dpd.phones.on('create', function(results){
		console.log(results);
		if($scope.tomatos)
			$scope.tomatos.push(results);
		else
			$scope.tomatos = [results];

		$scope.$apply(results);
	});


}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];


/**
 * Test
 * @param {Object} $scope
 * @param {Object} $routeParams
 * @param {Object} Deployd
 */
function TomatoDetailCtrl($scope, $routeParams, Deployd) {
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
