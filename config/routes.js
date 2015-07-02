// First at the top of your routes.js file you'll have to require the controller
var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');


// This is our routes.js file located in /config/routes.js
  // We will have to require this in the server.js file and pass it app
  module.exports = (function(app) {
    app.get('/orders', function(req, res) {
      orders.show(req, res);
    });

    app.get('/customers', function(req, res) {
      customers.show(req, res);
    });

    app.post('/addcust', function(req, res) {
    	customers.add(req, res);
    });

    app.get('/delete/:id', function(req, res) {
    	customers.remove(req, res);
    });

  });