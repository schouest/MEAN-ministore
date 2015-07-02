var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

require('./config/mongoose.js'); // this must be above require(routes)
require('./config/routes.js')(app);

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));

app.listen(8888, function() {
  console.log('Listening: 8888');
});