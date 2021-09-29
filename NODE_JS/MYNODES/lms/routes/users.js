var express = require("express");
const session = require("express-session");
var router = express.Router();

/* GET home page. */
var userhomepage = function (req, res, next) {
  var empId = req.session.empId;

  if (empId) {
    req.getConnection(function (err, connection) {
      if (err) console.log(err);

      connection.query(
        "select * from leaverequests where emp_id=? ORDER BY apply_date desc",
        [empId],
        function (err, results) {
          if (err) console.log(err);
          connection.query(
            "select * from employes where emp_id=?",
            [empId],
            function (err, empInfo) {
              if (err) console.log(err);

              res.render("userhome1.ejs", {
                title: "homepage",
                data: results,
                profile: empInfo,
                type: req.session.userType,
              });
            }
          );
        }
      );
    });
  }
};

router.get("/", userhomepage);

module.exports = router;
