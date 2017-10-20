var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();
var cors = require('cors');  //using this locally

app.use('/', routes);
app.use(cors());

app.listen(8080, function(){
  console.log('app listening on port 8080')
})
