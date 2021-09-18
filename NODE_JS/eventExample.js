
var events = require('events');                 // Import events module  
var eventEmitter = new events.EventEmitter();  
                                                
var connectHandler = function connected() {      //3// Create an event handler as follows
   console.log('connection succesfull.');
    for (let i=0;i<100;i++ ){
        console.log(i)
        }                                         //4// Fire the data_received event     //5
}       
                                             
eventEmitter.on('connection', connectHandler);   //2// Bind the connection event with the handler
         
eventEmitter.on('data_received', function(){     //6// Bind the data_received event with the anonymous function
   console.log('data received succesfully.');  
    });  
                                               
eventEmitter.emit('connection'); 
eventEmitter.emit('data_received');                //1// Fire the connection event
console.log("Program Ended.");                   //8