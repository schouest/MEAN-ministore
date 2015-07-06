var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');//had to require product's model too

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
       // console.log('newOrder in controller =', newOrder);
        Product.find({name: newOrder.pname}, function(err, results) {
            if(err){
                console.log(err);
            } else{
               // console.log('results= ', results);
                if(results[0].icount < newOrder.count){
                    console.log('ERROR: BUY EXCEEDS TOTAL STOCK');
                }
                else{                    
                    tempname = results[0].name;
                    tempvar = results[0].icount - newOrder.count;

                    Product.findOneAndUpdate({name: tempname}, {icount: tempvar}, function(err, data){
                        if (err){
                            console.log('got an error');
                        }
                        else{
                            //console.log('reached saving to DB stage');
                            newOrder.save(function(err) {
                                if(err){
                                    console.log(err);
                                } else{
                                    res.redirect('/');
                                }
                             }) 
                        }
                    });  
                }
            }
        })        
    },
  }
})();