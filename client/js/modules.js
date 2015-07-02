var ministore_App = angular.module('ministore_App', ['ngRoute']);

ministore_App.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html'
	})
	.when('/orders', {
		templateUrl: 'partials/orders.html'
	})
	.when('/customers', {
		templateUrl: 'partials/customers.html'
	})
	.when('/products', {
		templateUrl: 'partials/products.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})