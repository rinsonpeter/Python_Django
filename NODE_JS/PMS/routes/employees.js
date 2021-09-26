var express = require("express");
var router = express.Router();
//var connection  = require('express-myconnection'); 

router.get("/", getEmployees);
router.get("/add", addEmployees);

function getEmployees(req, res, next) {
    req.getConnection(function (err, connection) {
        var query = connection.query(
            "SELECT * FROM employees",
                function (err, rows) {
                    if (err) {
                        res.render("pages/getAllEmp", { data: "" });
                    } else {
                        res.render("pages/getAllEmp", { data: rows });
                    }
                }
        );
    });
};
function addEmployees(req, res, next) {
  res.render('pages/addEmp');
  //{page_title:"Add Employee - Node.js"}   
};

module.exports = router;
