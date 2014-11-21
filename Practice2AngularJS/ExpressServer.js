var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/dataClient', function(request, response){	
	var dataClient = [
	{ "name": "jhon backend", "last_name": "velez backend" },
	{ "name": "maria backend", "last_name": "all backend" }
	]
	response.status(200).send(dataClient);
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});