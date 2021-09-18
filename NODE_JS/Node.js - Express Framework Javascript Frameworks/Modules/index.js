

/* 
//Chaining of Streams
 var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed."); 


// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("File Decompressed.");

 */


/* 

//Piping of Stream
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended"); */




/* 
//Writing to a stream
var fs = require("fs");
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");
 */





/* 
//Reading from a stream
var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");
 */



//Buffers
/* 
var buffer1 = new Buffer('Hello World');
var buffer2 = buffer1.slice(0,5);
console.log("buffer length: " + buffer1.length);
console.log("buffer1 : " + buffer1.toString());
console.log("buffer2 : " + buffer2.toString());

var buffer3 = new Buffer('ABC');
var buffer4 = new Buffer('ABCD');
var buffer5 = Buffer.concat([buffer3, buffer4]);
console.log("Buffer 5 " + buffer5);
var result = buffer3.compare(buffer4);
var result1 = buffer4.compare(buffer3);
console.log("Result : " + result);
console.log("Result 1 : " + result1);
if(result < 0) {
   console.log(buffer3 +" comes before " + buffer4);
} else if(result === 0) {
   console.log(buffer3 +" is same as " + buffer4);
} else {
   console.log(buffer3 +" comes after " + buffer4);
}
 */






/* var fs = require("fs");

console.log("Going to write into existing file");
fs.appendFile('input.txt', '1', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
});
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());

}); */

/* console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
}); */



/* 
console.log( __filename );
console.log( __dirname );

function print(){
    console.log("Hello World");
}
var t=setTimeout(print,3000);
clearTimeout(t);
setInterval(print,2000); */



//Event Emitter
/* var events=require("events");
var eventEmitter = new events.EventEmitter();
var eventHandler = function connected (){
    console.log("Connected");
    eventEmitter.emit('dataReceived');
} 
// Bind the data_received event with the function dataReceived
eventEmitter.on('dataReceived',function dataReceived(){
    console.log("Data Received succesfully");
});
// Bind the connect event with the handler
eventEmitter.on('connect',eventHandler);
eventEmitter.emit('connect'); */



//Blocking and Non-Blocking Callbacks

var fs=require('fs');
// Blocking Code Example
/* var data = fs.readFileSync('input.txt');
console.log(data.toString());  */

// Non-Blocking Code Example
fs.readFile('input.txt',function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
});
console.log("Program Ended");
