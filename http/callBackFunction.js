// 将回调函数提取出来

var http = require('http');

function callBackFunction(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

var server=http.createServer(callBackFunction);

server.listen(3001, '192.168.5.137');

console.log('Server running at http://192.168.5.137:3001/');

