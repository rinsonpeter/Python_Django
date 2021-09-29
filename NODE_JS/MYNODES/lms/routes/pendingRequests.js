var express = require("express");
var router = express.Router();

var pendingLeaves = function (req, res, next) {
  var empId = req.session.empId;

  if (empId) {
    req.getConnection(function (err, connection) {
      if (err) console.log(err);

      connection.query(
        "select r.*,e.name,d.department from leaverequests r inner join employes e on r.emp_id=e.emp_id inner join departments d on e.dept_id=d.dept_id where r.status= ? and e.rep_officer= ? ORDER BY r.apply_date desc",
        ["Pending", empId],
        function (err, results) {
          if (err) console.log(err);
          // console.log(results);

          // res.send('success');
          res.render("pendingRequests", {
            title: "Pending Requests",
            data: results,
            type: req.session.userType,
          });
        }
      );
    });
  }
};

var approval = function (req, res, next) {
  var id = req.params.id;
  req.getConnection(function (err, connection) {
    if (err) console.log(err);

    connection.query(
      'UPDATE leaverequests SET status = "Approved" WHERE req_id = ?',
      [id],

      function (err, results) {
        if (err) console.log(err);

        res.redirect("/pendingrequests");
      }
    );
  });
};

var reject = function (req, res, next) {
  var id = req.params.id;
  var comments = req.body.comments;
  console.log(id, comments);
  req.getConnection(function (err, connection) {
    if (err) console.log(err);
    var sql =
      'UPDATE leaverequests SET status ="Rejected", reject_reason= ? WHERE req_id = ?';
    connection.query(
      sql,
      [comments, id],

      function (err, results) {
        if (err) console.log(err);

        res.redirect("/pendingrequests");
      }
    );
  });
};

router.get("/", pendingLeaves);
router.get("/approverequest/:id", approval);
router.post("/rejectrequest/:id", reject);

module.exports = router;
