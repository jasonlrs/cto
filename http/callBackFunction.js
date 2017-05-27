// 将回调函数提取出来

var http = require('http');

function callBackFunction(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});  // http状态码200，表示成功； 404访问的资源不存在
	//Content-Type 告诉浏览器，回复的资源类型'text/plain'为字符串    'text/html'回复的是网页
  res.write('<html>');
  res.write('<head>');
  res.write('<title>');
  res.write('this is a test page');
  res.write('</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>');
  res.write('this is a H1 tag');
  res.write('</h1>');
  res.write('<p>');
  res.write('this is a p tag');
  res.write('</p>');
  res.write('<ul>');

  for(var i=0; i<100;i++) { 
    res.write('<li>');
    res.write('this is a list');
    res.write('</li>');
  }

  res.write('</ul>');
  res.write('</body>');
  res.write('</html>');
  res.end('Hello World\n');
}

var server=http.createServer(callBackFunction);

server.listen(3001, '192.168.5.137');

console.log('Server running at http://192.168.5.137:3001/');

