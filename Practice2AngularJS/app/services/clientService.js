(function  () {
	var serviceId = 'clientService';

	angular.module('app').factory(serviceId, ['$http', '$q', clientService]);

	function clientService ($http, $q) {
		
		var service = {
			GetDataClient: getDataClient,
			GetDataCustomer: getDataCustomer
		};

		return service;

		function getDataClient () {

			var deferred = $q.defer();

			$http.get('/dataClient').success(function  (data) {
				var dataResult =  data;

				deferred.resolve(data);
			});

			return deferred.promise;
		}

		function getDataCustomer () {
			
		}

		function ayudame () {
			
		}
	}
})();