var http = require('http');
var url = require('url');
var querystring = require('querystring');

//http服务器监听浏览器的请求
// 当接收的是GET方式请求req，使用doGet(req,res)处理请求
// 当接收的是POST方式请求req,使用doPost(req,res)处理请求
//
// req, 是浏览器发过来的请求（对象 ）
// res，是服务器向客户端的发送的回复信息对象
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

}).listen(3001, '192.168.5.137');

function doGet(req, res) {
  // 使用url对象，解析出query
  var query=url.parse(req.url).query;
  console.log(query);

  // 使用querystring模块解析query对象
  var queryObj = querystring.parse(url.parse(req.url).query);
  console.log(queryObj);

// 服务器回复信息
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
  console.log('doPost');
  var formData='';

//通过req.on('data',function)给req请求绑定一个事件，只要接收到一个数据包请求
//就调用一个函数处理这个数据包请求
  req.on('data', function(data) {
    // console.log(data.toString());    //这个函数，接收一个数据包请求后，直接将数据打印
    formData+=data;
  });

//通过req.on('end',function)监听一个end事件，当一个包发送完毕，客户端会向服务器发送一个end事件
//服务器接收到end事件后，进行处理
  req.on('end', function() {
    res.end(formData);
  });
}


console.log('this is page at http://192.168.5.137:3001/');


