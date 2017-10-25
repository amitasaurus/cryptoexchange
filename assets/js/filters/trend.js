(function() {
	angular.module('cryptoExchange')
		.filter('trend', function() {
			return function(item) {
				var icon = '';
				if(Math.sign(item) === -1){
					icon = 'trending_down';
				}
				else{
					icon = 'trending_up';
				}
				return icon;
			};
		});
})();