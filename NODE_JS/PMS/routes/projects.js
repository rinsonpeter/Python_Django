var express = require("express");
var router = express.Router();
var session = require("express-session");


function getAllProjects(req,res,next){
    console.log(req.session.username, req.session.usertype);

  req.getConnection(function (err, connection) {
    var query = connection.query(
      "SELECT * FROM projects",
      function (err, rows) {
        if (err) {
            res.render('pages/getProjects', {
            data: "",
          });
        } else {
            res.render('pages/getProjects', {
            data: rows,
          });
        }
      }
    );
  });
}

function deleteProj(req,res,next){
    var id = req.params.id;
  console.log(id);

  req.getConnection(function (err, connection) {
    connection.query(
      "DELETE FROM projects WHERE pro_no = ? ",
      [id],
      function (err, rows) {
        if (err) {
          console.log("Error deleting : %s ", err);
        } else {
          res.redirect("/projects");
        }
      }
    );
  });
}
function infoProj(req, res, next) {
    var id = req.params.id;
    req.getConnection(function (err, connection) {
      var query = connection.query(
        "SELECT * FROM projects WHERE pro_no = ?",
        [id],
        function (err, rows) {
          if (err) {
            console.log("Error Selecting : %s ", err);
          } else {
            var query2 = connection.query(
              "select e.*,w.* from employees e join works_on w on e.emp_no=w.emp_no where w.pro_no=?",
              [id],
              function (err, rows2) {
                if (err) {
                  console.log("Error Selecting : %s ", err);
                } else {
                    console.log("rows:",rows)
                    console.log("rows2:",rows2)

                  res.render("pages/proInfo", {
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
  function editEmp(req, res, next) {
    var id = req.params.id;
    req.getConnection(function (err, connection) {
      var query = connection.query(
        "select e.*,d.dept_name from DEPARTMENTS as d Join employees as e on e.dept_no=d.dept_no where e.emp_no=?",
        [id],
        function (err, rows) {
          if (err) console.log("Error Selecting : %s ", err);
          else {
            res.render("pages/editProj", {
                data: rows,
                data2: rows2,
              });
            
          }
        }
      );
    });
  }
  


router.get("/", getAllProjects);
router.get("/delete/:id", deleteProj);
router.get("/info/:id", infoProj);

module.exports = router;
