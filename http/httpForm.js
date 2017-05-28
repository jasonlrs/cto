var http = require('http');

http.createServer(function(req, res) {
  // html有协议头Head，和协议体Body
  // 协议头'text/plain'表示回复的信息格式为文本块； 'text/html'表示回复的信息格式为html
  res.writeHead(200, {'Content-Type': 'text/html'});  //'text/plain'改成'text/html'
//  res.write('<h1>this is a test page!</h1>');
//  for(var i=0; i<10; i++) {
//    res.write('<p>hehe !</p>');  //res.write() 表示连接还在，请求没有结束
//  }

  if(req.method === 'GET') {
    doGet(req, res);
  } else if (req.method === 'POST') {
    doPost(req, res);
  } else {
    res.end();
  }


  res.end('Hello World!\n');  //res.end() 表示连接结束，意味着请求结束
}).listen(3001, '192.168.5.137');

function doGet(req, res) {

// 通过表单发送数据给服务器
  res.write('<html>');
  res.write('<head>');
  res.write('<title>');
  res.write('</title>');
  res.write('</head>');

  res.write('<body>');
// 使用post请求方式，表单内容不会再URL上显示，get方式表单内容会在URL上显示
  res.write('<form method="post">');  //表单请求方式，默认是get，post方式必须显示声明
  res.write('username:<input name="username">');
  res.write('password:<input name="password" type="password"><input type="submit">');
  res.write('</form>');
  res.write('</body>');

  res.write('</html>');

  res.end();
}


function doPost(req, res) {
  res.write('success!');
  res.end();
}


console.log('this is page at http://192.168.5.137:3001/');


