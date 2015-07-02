ministore_App.controller('customersController', function (customerFactory){
        var that = this;
          that.customers = [];
          // run the get method and set $scope data in the callback
          customerFactory.getCustomers(function (data){
              that.customers = data;
          })
            
      that.addCust = function (){
        for (i = 0; i < that.customers.length; i++){  //check through list for dupe names
              if(that.customers[i].name == that.newCustomer.name){
                console.log("ERROR: NAME MATCHED");
                that.error_txt = 'ERROR: NAME MATCHED';
                return false;
              }
        }
        that.newCustomer.addDate = new Date();
        customerFactory.addCustomer(that.newCustomer,function (){
            that.newCustomer = {};// clear the form values
            customerFactory.getCustomers(function (data){
                that.customers = data;
            })
        })


//		    that.customers.push(that.newCustomer); // add to the array	    
        that.error_txt = '';//reset error text
		}

      that.removeCust = function (customer){
        //that.customers.splice(that.customers.indexOf(customer),1);
          customerFactory.delCustomer(customer, function(customers){
              that.customers = customers;
          })
    }

      });


ministore_App.controller('ordersController', function (orderFactory){
        var that = this;
          that.orders = [];
          // run the get method and set $scope data in the callback
          orderFactory.getOrders(function (data){
              that.orders = data;
          })
            
      that.addProd = function (){
        for (i = 0; i < that.orders.length; i++){  //check through list for dupe names
              if(that.orders[i].pname == that.newOrder.pname
                && that.orders[i].cname == that.newOrder.cname){
                console.log("ERROR: USER ALREADY PLACED ORDER");
                that.error_txt = 'ERROR: USER ALREADY PLACED ORDER';
                return false;
              }
        }
        that.newOrder.addDate = new Date();
        that.orders.push(that.newOrder); // add to the array      
        that.newOrder = {};// clear the form values
        that.error_txt = '';//reset error text
    }

      });