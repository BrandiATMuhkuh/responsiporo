'use strict';

/* Controllers */

function TomatoListCtrl($scope, $http, Deployd) {


	/*
	$http.get('http://localhost:2403/phones').success(function(data) {
		$scope.tomatos = data;
	});
	*/
	dpd.phones.get(function (result, err) {
	  if(err) return console.log(err);

	  $scope.tomatos = result;
	  $scope.$apply(result);

	  console.log(result);
	});

	dpd.phones.on('create', function(results){
		console.log(results);
		if($scope.tomatos)
			$scope.tomatos.push(results);
		else
			$scope.tomatos = [results];

		$scope.$apply(results);
	});

	
	/*
	Deployd.on('phones:create', function (message) {
		console.log(message);
		if($scope.tomatos)
			$scope.tomatos.push(message);
		else
			$scope.tomatos = [message];
	});
	*/
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function TomatoDetailCtrl($scope, $routeParams, Deployd) {
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
