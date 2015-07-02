var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name: String,
  imgurl: String,
  icount: Number,
  desc: String,
  addDate: Date
});
mongoose.model('Product', ProductSchema);
