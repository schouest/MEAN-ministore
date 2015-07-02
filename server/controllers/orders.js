var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
  return {
    show: function(req, res) {
    	Order.find({}, function(err, results) {
    		if(err){
    			console.log(err);
    		} else{
    			res.json(results);
    		}
    	})

    },

    add: function(req, res) {

        var newOrder = new Order(req.body)
        newOrder.save(function(err) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }
        })
    },

    remove: function(req, res) {
        Order.remove({_id: req.params.id}, function(err, results) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }
        })
    }
  }
})();