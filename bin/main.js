var port = (process.env.PORT || 3000);
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello world test using express and npm');
});

app.listen(port);
