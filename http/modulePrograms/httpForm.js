
var http = require('http');
var get = require('./httpGet.js');
var post = require('./httpPost.js');
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

  if(req.method === 'GET') {
    get.doGet(req, res);
  } else if (req.method === 'POST') {
    post.doPost(req, res);
  } else {
    res.end();
  }

}).listen(3001, '192.168.5.137');

console.log('http server address at http://192.168.5.137:3001/');
