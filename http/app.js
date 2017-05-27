//app.js
//

var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Node.js</h1>');
  res.write('<p>what change</p>');
  res.end('<p>Hello World</p>');

}).listen(3001, '192.168.5.137');

console.log('HTTP server is listening at http://192.168.5.137:3001');
