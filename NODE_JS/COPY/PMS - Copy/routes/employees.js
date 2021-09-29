var express = require("express");
var router = express.Router();
//var connection  = require('express-myconnection');



function saveEditEmp(req, res, next) {
  var input = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;

  req.getConnection(function (err, connection) {
    var data = {
      
      emp_name: input.name,
      job: input.job,
      mgr: input.mgr,
      hire_date: input.hire_date,
      dept_no: input.dept_no,
      sal: input.sal,
      comm: input.comm,
    };

    connection.query(
      "UPDATE employees set ? WHERE emp_no = ? ",
      [data, id],
      function (err, rows) {
        if (err) console.log("Error Updating : %s ", err);

        res.redirect("/employees");
      }
    );
  });
}

function deleteEmp(req, res, next) {
  var id = req.params.id;
  console.log(id)

    
  req.getConnection(function (err, connection) {
    connection.query(
      "DELETE FROM employees  WHERE emp_no = ? ",
      [id],
      function (err, rows) {
        if (err) {
          console.log("Error deleting : %s ", err);
        } else {
          res.redirect("/employees");
        }
      }
    );
  });
}

function editEmp(req, res, next) {
  var id = req.params.id;
  req.getConnection(function (err, connection) {
    var query = connection.query(
      "SELECT * FROM employees WHERE emp_no = ?",
      [id],
      function (err, rows) {
        if (err) console.log("Error Selecting : %s ", err);
        console.log(rows)
        res.render("pages/editEmp", {data: rows});
      }
    );

    //console.log(query.sql);
  });
}

function getEmp(req, res, next) {
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
}
function addEmp(req, res, next) {
  res.render("pages/addEmp");
  //{page_title:"Add Employee - Node.js"}
}

function saveEmp(req, res, next) {
  var input = req.body
  console.log("input",input)
  req.getConnection(function (err, connection) {
    var data = {
      emp_no: input.id,
      emp_name: input.name,
      job: input.job,
      mgr: input.mgr,
      hire_date: input.hrdte,
      dept_no: input.dptno,
      sal: input.sal,
      comm: input.comments,
    };
    //console.log(data);
    var query = connection.query('INSERT INTO  employees set ?',data,
      function (err, rows) {
        if (err) console.log("Error inserting : %s ", err);
        res.redirect("/employees");
      }
    );
  });
}

router.get("/", getEmp);
router.get("/add", addEmp);
router.post("/add", saveEmp);
router.get("/edit/:id", editEmp);
router.post("/edit/:id", saveEditEmp);
router.get("/delete/:id", deleteEmp);

module.exports = router;
