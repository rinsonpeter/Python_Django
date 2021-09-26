var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'rinson@123',
	database:'mycompany'
});
connection.connect
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected..!');
	}
});

module.exports = connection;


// app.use(
    
//     connection(mysql,{
        
//         host: 'localhost',
//         user: 'root',
//         password : 'rinson@123',
//         port : 3306, //port mysql
//         database:''

//     },'pool') //or single

// );

