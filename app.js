'use strict';

const net = require('net');
const client = new net.Socket();
const fs = require('fs');
const util = require('util');

client.connect(4000, 'localhost', () => {
  console.log('App connected to host');
});

client.write('Hello');

// const readFile = async file => {
//   const fsRead = util.promisify(fs.readFile);
//   try{
//     const data = await fsRead(file);
//     return data;
//   } catch(error){
//   }
// };

// const upperCase = async data => {
//   try{
//     let text = await data.toString().toUpperCase();
//     client.write()
//     return text;
//   } catch (error){
//   }
// };

// const saveFile = async (file, text) => {
//   try {
//     const fsWrite = util.promisify(fs.writeFile);
//     await fsWrite(file, Buffer.from(text));
//     client.write('save')
//   } catch (error){
//   }
// };

// const alterFile = async file => {
//   try {
//     const data = await readFile(file);
//     const text = upperCase(data);
//     saveFile(file, text);
//   } catch (error){
//   }
// };

// let file = process.argv.slice(2).shift();
// alterFile(file);

// const events = ['write', 'read', 'update']


// setInterval(() => {
//   let event = events[Math.floor(Math.random() * events.length)];
//   client.write(`${event} has occured`)
// }, 500);