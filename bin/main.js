var port = (process.env.VCAP_APP_PORT || 3000);
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello world test using express and npm');
});

app.listen(port);