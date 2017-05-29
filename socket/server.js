const net = require('net');

var socketList=[];

const server = net.createServer((socket) => {
  // 'connection' listener
  console.log('client connected');

  socketList.push(socket);
  
  socket.on('end', () => {
    console.log('client disconnected');
  });

  socket.on('data', function(data) {
    broadcast(data);    //调用广播函数，将接受到的客户端信息，广播出去
  });

});


//遍历socket数组，将数据以轮询的方式，广播信息
function broadcast(data) {
  for(i=0;i<socketList.length;i++) {
    socketList[i].write(data);
  }
}

server.on('error', (err) => {
  throw err;
});

server.listen(8124, () => {
  console.log('server bound at 192.168.5.137 on port 8124');  
});
