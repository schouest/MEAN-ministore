ministore_App.factory('customerFactory', function (){
    var customers = [];
    var factory = {};
    // add a get method to the object we defined
    factory.getCustomers = function (callback){
        // pass the object to a callback to be used by whoever calls the method
        callback(customers);
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