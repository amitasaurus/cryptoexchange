(function() {
  angular.module('cryptoExchange', ['ui.router', 'ngMaterial', 'ngAnimate','angular-loading-bar','chart.js'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', '$mdIconProvider', 'cfpLoadingBarProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, $mdIconProvider, cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeSpinner = false;
      
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('/', {
          url: '/',
          templateUrl: 'cryptoexchange/assets/views/dashboard.html',
          controller: 'mainCtrl'
        });

       $locationProvider.html5Mode(true);


      
      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('red');

      

}]);
})();
