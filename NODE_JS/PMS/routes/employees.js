var express = require("express");
var router = express.Router();
var session = require("express-session");

function saveEditEmp(req, res, next) {
  var input = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;

  req.getConnection(function (err, connection) {
    var data = {
      emp_name: input.name,
      job: input.job,
      mgr: input.mgr,
      hire_date: input.hire_date,
      dept_no: input.deptno,
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
  console.log(id);

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
      "select e.*,d.dept_name from DEPARTMENTS as d Join employees as e on e.dept_no=d.dept_no where e.emp_no=?",
      [id],
      function (err, rows) {
        if (err) console.log("Error Selecting : %s ", err);
        else {
          var query2 = connection.query(
            "SELECT * FROM departments",
            function (err, rows2) {
              if (err) {
                res.render("pages/editEmp", {
                  data: "",
                });
              } else {
                res.render("pages/editEmp", {
                  data: rows,
                  data2: rows2,
                });
              }
            }
          );
        }
      }
    );
  });
}

function infoEmp(req, res, next) {
  var id = req.params.id;
  req.getConnection(function (err, connection) {
    var query = connection.query(
      "SELECT * FROM employees WHERE emp_no = ?",
      [id],
      function (err, rows) {
        if (err) {
          console.log("Error Selecting : %s ", err);
        } else {
          var query2 = connection.query(
            "select d.dept_name from DEPARTMENTS as d Join employees as e on e.dept_no=d.dept_no where e.emp_no=?",
            [id],
            function (err, rows2) {
              if (err) {
                console.log("Error Selecting : %s ", err);
              } else {
                res.render("pages/infoEmp", {
                  data: rows,
                  data2: rows2,
                });
              }
            }
          );
        }
      }
    );
  });
}

function getAllEmp(req, res, next) {
  if (req.session.usertype){
    console.log(req.session.username, req.session.usertype);

  req.getConnection(function (err, connection) {
    var query = connection.query(
      "SELECT * FROM employees",
      function (err, rows) {
        if (err) {
          res.render("pages/getAllEmp", {
            data: "",
          });
        } else {
          res.render("pages/getAllEmp", {
            data: rows,
          });
        }
      }
    );
  });
  }
  else{
    res.render("pages/loginPage",{errorMessage:"Please login to continue.."})
  }

  
}

function addEmp(req, res, next) {
  req.getConnection(function (err, connection) {
    var query2 = connection.query(
      "SELECT * FROM departments",
      function (err, rows2) {
        if (err) {
          res.render("pages/addEmp", {
            data: "",
          });
        } else {
          console.log(rows2);
          res.render("pages/addEmp", {
            data2: rows2,
          });
        }
      }
    );
  });
}

function saveEmp(req, res, next) {
  var input = req.body;
  //  console.log("input",input)
  req.getConnection(function (err, connection) {
    var data = {
      emp_no: input.id,
      emp_name: input.name,
      job: input.job,
      mgr: input.mgr,
      hire_date: input.hrdte,
      dept_no: input.deptno,
      sal: input.sal,
      comm: input.comments,
    };
    //console.log(data);
    var query = connection.query(
      "INSERT INTO  employees set ?",
      data,
      function (err, rows) {
        if (err) console.log("Error inserting : %s ", err);
        res.redirect("/employees");
      }
    );
  });
}

router.get("/", getAllEmp);
router.get("/add", addEmp);
router.post("/add", saveEmp);
router.get("/edit/:id", editEmp);
router.post("/edit/:id", saveEditEmp);
router.get("/delete/:id", deleteEmp);
router.get("/info/:id", infoEmp);

module.exports = router;
