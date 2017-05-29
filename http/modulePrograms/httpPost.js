
function doPost(req, res) {
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

exports.doPost=doPost;
