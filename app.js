'use strict';

const net = require('net');
const client = new net.Socket();
const fs = require('fs').promises;

client.connect(4000, 'localhost', () => {
  console.log('App connected to host');
});

const readFile = (filePath) => fs.readFile(filePath);
const writeFile = (filePath, buffer) => fs.writeFile(filePath, buffer);
const upperCase = (buffer) => {
  const convertedBuffer = buffer.toString().trim().toUpperCase();
  return Buffer.from(convertedBuffer);
}

const events = {
  'READ_ERROR' : 'read-error',
  'WRITE_ERROR' : 'write-error',
  'WRITE_SUCCESS' : 'write-success'
};

module.exports ={
  readFile,
  writeFile,
  upperCase
}

const alterFile = (file) => {
  return readFile(file)
    .then(contents => upperCase(contents))
    .then(buffer => {
      return writeFile(file, buffer)
        .catch(error => client.write(`${events.WRITE_ERROR} ${error.text}`))
    })
    .then(() => client.write(`${events.WRITE_SUCCESS} ${file}`))
    .catch(error => client.write(`${events.READ_ERROR} ${error.text}`))
}

let file = process.argv.slice(2).shift();
alterFile(file);
