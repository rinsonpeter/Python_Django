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

router.get("/", getAllProjects);

module.exports = router;
