var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/pict', express.static(__dirname + '/pict'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('image refresh', function(msg){
    io.emit('image refresh', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


