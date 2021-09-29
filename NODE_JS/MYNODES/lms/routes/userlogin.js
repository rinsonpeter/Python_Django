var express = require("express");
const session = require("express-session");

var router = express.Router();

/* GET login page. */
var login = function (req, res, next) {
  res.render("login");
};

var loginValidate = function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  req.getConnection(function (err, connection) {
    if (err) console.log(err);

    connection.query(
      "select * from employes where username=? and password=?",
      [username, password],
      function (err, results) {
        if (err) console.log(err);

        if (results.length > 0) {
          var empId = results[0].emp_id;
          var userType = results[0].user_type;

          req.session.empId = empId;
          req.session.userType = userType;
          console.log(userType);
          res.redirect("/users");
        } else res.send("Incorrect Username and/or Password!");
      }
    );
  });
};

router.get("/", login);
router.post("/", loginValidate);

module.exports = router;
