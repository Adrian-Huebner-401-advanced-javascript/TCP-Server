'use strict';

const net = require('net');
const client = new net.Socket();

client.connect(4000, 'localhost', () => {
  console.log('logger has connected');
});

const handleData = (buffer) => {
  const data = JSON.parse(buffer);
  if(data.event === 'write-error' || data.event === 'read-error'){
    console.error(data);
  } else if(data.event === 'write-success'){
    console.log(data);
  } else{
    console.log('Ignored');
  }
}

client.on('data', handleData)