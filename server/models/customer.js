var mongoose = require('mongoose');
// create our Schema
var CustomerSchema = new mongoose.Schema({
  name: String,
  addDate: Date
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Customer', CustomerSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller
