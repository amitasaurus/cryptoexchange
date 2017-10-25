(function() {
	angular.module('cryptoExchange')
		.factory('dataService', ['$http', '$q', function($http, $q) {
			return {
				getStats : getStats
			};

			function getStats(){
				return $http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10');
			}
		}]);
})();