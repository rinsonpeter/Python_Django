var express = require("express");
var router = express.Router();
var session = require("express-session");

function getLoginPage(req, res, next) {
  req.session.destroy();
  res.render("pages/loginPage",{errorMessage:""});
}

var loginValidate = function (req, res, next) {
  var inpUsername = req.body.username;
  var inpPassword = req.body.password;

  req.getConnection(function (err, connection) {
    if (err) {
      console.log(err);
    } else {
      connection.query(
        "select * from users where username=? and password=?",
        [inpUsername, inpPassword],
        function (err, results) {
          if (err || results.length == 0) {
            console.log(err);
            res.render("pages/error", {
              message: "Incorrect Username and/or Password!" ,
              error:{status:"db mismatch",stack:"invalid credentials"}});
              
          } else {
            console.log("insied good connection login successfull");
            var dbUsername = results[0].username;
            var dbUsertype = results[0].usertype;

            req.session.username = dbUsername;
            req.session.usertype = dbUsertype;
            
            res.redirect("/employees");
          }
        }
      );
    }
  });
};

router.get("/", getLoginPage);
router.post("/", loginValidate);

module.exports = router;
