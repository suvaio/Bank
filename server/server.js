var fs = require('fs');
var http = require('http');

var dispatcher = require('./dispatcher.js');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, data){
    if(err){
      return console.log(err);
    }
	dispatcher.dispatcher(req,res);
  res.end(data);
  });
}).listen(8080);
console.log('Server is running on Port: 8080');