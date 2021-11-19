/**
 * Created by vaio on 06-08-2015.
 */
var t1 = new Date().getTime();
var call1 = require('./ExportDemo');
console.log("t1:"+t1)
console.log(new Date().getTime() - t1); // > 0
var t2 = new Date().getTime();
var call2 = require('./ExportDemo');
console.log(new Date().getTime() - t2); // approx 0
/*After the first time a require call is made to a particular file, the module.exports is cached.
 The next time a call is made to require that resolves to the same file  the module.
 exports variable of the destination file is returned from memory, keeping things fast. */
