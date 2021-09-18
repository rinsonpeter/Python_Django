/**
 * 
 */
var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "assyst@123",
  database: 'nodedb'
  		
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

//Get all employees

con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	  console.log('Data received from Db:\n');
	  console.log(rows);
	  //Data returned from the MySQL database can be parsed by simply lopping over the rows object.
	  for (var i = 0; i < rows.length; i++) {
		  console.log(rows[i].name);
		};
	});


// Insert a record:

var employee = { name: 'Winnie', location: 'Australia' };
con.query('INSERT INTO employees SET ?', employee, function(err,res){
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

// Update a record
con.query(
		  'UPDATE employees SET location = ? Where ID = ?',
		  ["South Africa", 5],
		  function (err, result) {
		    if (err) throw err;

		    console.log('Changed ' + result.changedRows + ' rows');
		  }
		);

// Delete a record

con.query(
		  'DELETE FROM employees WHERE id = ?',
		  [5],
		  function (err, result) {
		    if (err) throw err;

		    console.log('Deleted ' + result.affectedRows + ' rows');
		  }
		);

con.end(function(err) {
	  // The connection is terminated gracefully
	  // Ensures all previously enqueued queries are still
	  // before sending a COM_QUIT packet to the MySQL server.
	});
//------------------------------------------------------------------------------------------------------------------------------
/* to prevent sql injection use mysql.escape() method:

con.query(
  'SELECT * FROM employees WHERE id =' + mysql.escape(userLandVariable), 
  function(err,rows){ ... }
);

Ref:https://www.sitepoint.com/using-node-mysql-javascript-client/

*/