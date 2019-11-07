'use strict';

const net = require('net');
const server = net.createServer();
// const port = process.env.PORT || 3001;
const uuid = require('uuid/v4');
const socketPool = [];

server.listen(4000, () => {
  console.log(`TCP server is up on ::: 4000`);
});

server.on('connection', socket => {
  socketPool.push(socket);
  socket.on('data', (buffer) => {
    for(let socket of socketPool){
      socket.write(buffer.toString())
    }
  });
});