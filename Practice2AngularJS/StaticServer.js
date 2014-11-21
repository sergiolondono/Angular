var static = require('node-static');
var http = require('http');

var file = new static.Server('./app');
var port = 6001;

http.createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port);

console.log("server running in port: " + port);

// app.get('/test', function(req, res) {    
//     res.sendFile(absolutePath + '/index2.html');
// });