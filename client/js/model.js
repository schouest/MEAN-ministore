ministore_App.factory('customerFactory', function ($http){
    var customers = [];
    var factory = {};
    factory.getCustomers = function (callback){
	    $http.get('/customers').success(function(output) {
			    callback(output);
	  })
    }

    factory.addCustomer = function (newCustomer, callback){
    	$http.post('/addcust', newCustomer).success(function() {
			    callback();
	  	})
    }

	factory.delCustomer = function (deleteCustomer, callback){
			$http.get('/delete/'+deleteCustomer._id).success(function(){
			    callback();
			 })
	}    
    return factory
});

ministore_App.factory('orderFactory', function ($http){
    var orders = [];
    var factory = {};
    factory.getOrders = function (callback){
        $http.get('/orders').success(function(output){
        	callback(output);
        })
    }

    factory.addOrder = function (newOrder, callback){
    	$http.post('/addOrder', newOrder).success(function() {
    		callback();
    	})
    }
    return factory
});

ministore_App.factory('productFactory', function ($http){
    var products = [{name: 'test'}];
    var factory = {};
    factory.getProducts = function (callback){
        $http.get('/products').success(function(output){
            callback(output);
        })
    }

    factory.addProduct = function (newProduct, callback){
        $http.post('/addProduct', newProduct).success(function() {
            callback();
        })
    }
    return factory
});
