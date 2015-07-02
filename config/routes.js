// First at the top of your routes.js file you'll have to require the controller
//var friends = require('./../server/controllers/friends.js');

// This is our routes.js file located in /config/routes.js
  // We will have to require this in the server.js file and pass it app
  module.exports = (function(app) {
    app.get('/orders', function(req, res) {
    	friends.show(req, res);
    });

    app.get('/customers', function(req, res) {
      friends.show(req, res);
    });

    app.post('/add', function(req, res) {
    	friends.add(req, res);
    });

    app.get('/delete/:id', function(req, res) {
    	friends.remove(req, res);
    });

  });