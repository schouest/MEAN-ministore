ministore_App.controller('customersController', function (customerFactory){
        var that = this;
          that.customers = [];
          customerFactory.getCustomers(function (data){
              that.customers = data;
          })
            
      that.addCust = function (){
        for (i = 0; i < that.customers.length; i++){  //check through list for dupe names
              if(that.newCustomer.name == undefined){
                console.log('ERROR: NO NAME ENTERED FOR NEW CUSTOMER');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.customers[i].name == that.newCustomer.name){
                console.log("ERROR: NAME MATCHED");
                that.error_txt = 'ERROR: User already exists';
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
        that.error_txt = '';//reset error text
		}

      that.removeCust = function (customer){
          customerFactory.delCustomer(customer, function(customers){
            customerFactory.getCustomers(function (data){
                that.customers = data;
            })
          })
    }
      });


ministore_App.controller('ordersController', function (orderFactory){
        var that = this;
          that.orders = [];
          orderFactory.getOrders(function (data){
              that.orders = data;
          })
            
      that.addOrder = function (){
        for (i = 0; i < that.orders.length; i++){  //form validation
              
              if(that.newOrder.cname == undefined || that.newOrder.cname == ""){
                console.log('ERROR: NO NAME ENTERED FOR CUSTOMER');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.newOrder.pname == undefined){
                console.log('ERROR: NO PRODUCT SELECTED');
                that.error_txt = 'ERROR: Product left blank';
                return false;
              }
              if(typeof that.newOrder.count != 'number' || that.newOrder.count < 1){
                console.log('ERROR: INVALID QUANTITY');
                that.error_txt = 'ERROR: Invalid Quantity';
                return false;
              }
              if(that.orders[i].pname == that.newOrder.pname
                && that.orders[i].cname == that.newOrder.cname){
                console.log("ERROR: USER ALREADY PLACED ORDER");
                that.error_txt = 'ERROR: User already placed order for that item';
                return false;
              }
        }

        that.newOrder.addDate = new Date();
        orderFactory.addOrder(that.newOrder, function (){
              that.newOrder = {};// clear the form values
               orderFactory.getOrders(function (data){
                  that.orders = data;
              })
                
        })
        that.error_txt = '';//reset error text
    }

      });

ministore_App.controller('productsController', function (productFactory){
        var that = this;
          that.products = [];
          productFactory.getProducts(function (data){
              that.products = data;
          })
            
      that.addProd = function (){

        for (i = 0; i < that.products.length; i++){  //form validation
              
              if(that.newProduct.name == undefined || that.newProduct.name == ""){
                console.log('ERROR: NO NAME ENTERED FOR PRODUCT');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.newProduct.desc == undefined){
                console.log('ERROR: NO DESCRIPTION');
                that.error_txt = 'ERROR: Please enter a description';
                return false;
              }
              if(typeof that.newProduct.icount != 'number' || that.newProduct.icount < 1){
                console.log('ERROR: INVALID INITIAL QUANTITY');
                that.error_txt = 'ERROR: Invalid Initial Quantity';
                return false;
              }
              if(that.products[i].name == that.newProduct.name){
                console.log("ERROR: PRODUCT NAME CONFLICT");
                that.error_txt = 'ERROR: Product with that name already exists';
                return false;
              }
        }

        that.newProduct.addDate = new Date();
        productFactory.addProduct(that.newProduct, function (){
            that.newProduct = {};// clear the form values
            productFactory.getProducts(function (data){
                  that.products = data;
              })  
        })
        that.error_txt = '';//reset error text
    }

    that.hidecount = true;
    that.getMax = function(param){
      that.invcount = param;
      that.hidecount = false;
    }

      });