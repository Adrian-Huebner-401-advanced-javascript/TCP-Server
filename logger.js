'use strict';

const net = require('net');
const client = new net.Socket();

client.connect(4000, 'localhost', () => {
  console.log('logger has connected');
});

client.on('data', (buffer) => {
  // if (buffer.toString() === 'save'){
  //  console.log('You have saved information')
  //}
  // if (buffer.toString() === 'error){
  //  console.log('You have an error')
  //}
  console.log(buffer.toString());
});