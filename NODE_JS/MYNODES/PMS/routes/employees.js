var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');



/* GET home page. */
// router.get('/', function(req, res, next) {
//     // res.render('index', { title: 'Express' });
//     dbConn.query('SELECT * FROM employees',function(err,rows)     {
          
//     //console.log(rows)
//     if(err) {
//         //req.flash('error', err);
//         res.render('index',{data:''});
//     } else {

//         res.render('index',{data:rows});
        
//     }

//   });

// });
router.get('/', getEmployees)

function getEmployees(req, res, next) {
    
    dbConn.query('SELECT * FROM employees',function(err,rows)     {
        if(err) {
            res.render('index',{data:''});
        } else {
            res.render('index',{data:rows});
        }
    });
}


// router.get('/add', addEmployee);


// var addEmployee=


module.exports = router;
