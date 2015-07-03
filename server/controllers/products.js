var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
  return {
    show: function(req, res) {
    	Product.find({}, function(err, results) {
    		if(err){
    			console.log(err);
    		} else{
    			res.json(results);
    		}
    	})
    },

    add: function(req, res) {

        var newProd = new Product(req.body)
        newProd.save(function(err) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }
        })
    },

    



    /*remove: function(req, res) {
        Product.remove({_id: req.params.id}, function(err, results) {
            if(err){
                console.log(err);
            } else{
                res.redirect('/');
            }

        })
    }*/
  }
})();