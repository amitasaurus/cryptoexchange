(function() {
	angular.module('cryptoExchange')
		.controller('mainCtrl', ['$scope', 'dataService', '$timeout' , function($scope, dataService, $timeout) {
			console.log('mainCtrl');
			$scope.labels = [];
			$scope.data = [];
			$scope.colors = [ '#FF6766', '#00ADF9', '#DCDCDC', '#3E4651', '#8870FF', '#2CC990', '#FEC606', '#87766C', '#64DDBB', '#44BBFF'];
			$scope.series = ['Price USD'];
			function getData(){
				dataService.getStats()
						.then(function(response){
							$scope.stats = response.data;
							for(var i = 0 ; i < $scope.stats.length ; i++){
								$scope.labels.push($scope.stats[i].id);
								$scope.data.push($scope.stats[i].price_usd)
							}
						});
			}
			getData();
			function refresh(){
				$timeout(function(){
					$scope.data = [];
					$scope.labels = [];
					getData();
					refresh();
				},300000);
			};
			refresh(); 
			
		}]);
})();