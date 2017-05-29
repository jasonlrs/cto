var url = require('url');
var querystring = require('querystring');

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

exports.doGet=doGet;
