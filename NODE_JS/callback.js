var fs = require("fs");  
  
fs.readFile('F:\\python\\Python\\Luminar\\Python_Django\\LUMINAR\\JAVASCRIPT\\NODE_JS\\input.txt', function (err, data) {  
    if (err) return console.error(err);  
    console.log(data.toString());  
    });  
    
console.log("Program Ended");