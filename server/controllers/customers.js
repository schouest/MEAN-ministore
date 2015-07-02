var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
    show: function(req, res) {
    	Customer.find({}, function(err, results) {
    		if(err){
    			console.log(err);
    		} else{
    			res.json(results);
    		}

    	})

    },

    add: function(req, res) {

        var newCust = new Customer(req.body)
        newCust.save(function(err) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }

        })
    },

    remove: function(req, res) {
        Customer.remove({_id: req.params.id}, function(err, results) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }

        })
    }
  }
})();