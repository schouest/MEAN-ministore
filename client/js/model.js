ministore_App.factory('customerFactory', function ($http){
    var customers = [];
    var factory = {};
    // add a get method to the object we defined
    factory.getCustomers = function (callback){
        // pass the object to a callback to be used by whoever calls the method
	    $http.get('/customers').success(function(output) {
			    callback(output);
	  })
    }

    factory.addCustomer = function (newCustomer, callback){
    	//console.log('front end model new customer: ',newCustomer);
    	//customers.push(newCustomer);
    	$http.post('/addcust', newCustomer).success(function() {
			    callback();
			    console.log('success in front end model addCustomer');
	  	})


    }

	factory.delCustomer = function (deleteCustomer, callback){
			//console.log(deleteCustomer, customers.indexOf(deleteCustomer));
			/*if(customers.indexOf(deleteCustomer) != -1){
				customers.splice(customers.indexOf(deleteCustomer),1);
			}*/
			$http.get('/delete/'+deleteCustomer._id).success(function(){
			    callback();
			 })
			//callback(customers);
		   


	}    
    return factory
});

ministore_App.factory('orderFactory', function (){
    var orders = [];
    var factory = {};
    // add a get method to the object we defined
    factory.getOrders = function (callback){
        // pass the object to a callback to be used by whoever calls the method
        callback(orders);
    }
    return factory
});