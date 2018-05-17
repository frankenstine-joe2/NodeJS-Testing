
//var dt = require('./myFirstModule');
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.write('The Current date and time : ' + dt.myDateTime);
    res.write('The Current date and time : ' + Date());
    res.write(req.url);
    res.end();
}).listen(8000);