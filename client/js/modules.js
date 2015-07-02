var ministore_App = angular.module('ministore_App', ['ngRoute']);

ministore_App.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/customers.html'
	})
	.when('/orders', {
		templateUrl: 'partials/orders.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})