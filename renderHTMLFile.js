
//var dt = require('./myFirstModule');
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    //Create File
    // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });

    //Open a File
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });

    //Read File
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    }); 
 
}).listen(8000);