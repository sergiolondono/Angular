(function () {
	'use strict';

	angular.module('App').controller('dataClientController', ['$scope', '$http', dataClientController]);

	function dataClientController ($scope, $http) {
		$scope.data = [
			{ "name": "mario", "last_name": "zapata" },
			{ "name": "jhonattan", "last_name": "velez" }			
		];

		$scope.getClientData =  function () {
			 alert('entre');
			//$http.jsonp('https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero')
			$http.get('http://localhost:3000/dataClient').success(function (data) {
						$scope.data	= data;	
					});
			// $scope.data = [
			// { "name": "mario1", "last_name": "zapata1" },
			// { "name": "jhonattan1", "last_name": "velez1" }			
			//]
		}
	}
})();
