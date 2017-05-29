// 这个例子演示如何通过传参的方式，连接socket服务器

const net = require('net');
var hostname = process.argv[2];
var port = process.argv[3];

const client = net.connect({host:hostname, port:port}, () => {
  // 'connect' listener
  console.log('connected to server!');

  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    var chunck = process.stdin.read();
    if(chunck !== null) {
      client.write(`data: ${chunck}`);
    }
  });  
});

client.on('data', (data) => {
  console.log(data.toString());
  //client.end();
});


client.on('end', () => {
  console.log('disconnected from server');
});

