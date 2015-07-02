//add the following two lines at the top of the friends controller so we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

// note the immediate function and the object that is returned
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
/*
    remove: function(req, res) {
    	console.log('died in backside customers controller', req.body);
        console.log('req: ', req.params.id);
        Friend.remove({_id: req.params.id}, function(err, results) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }

        })
    }*/
  }
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports