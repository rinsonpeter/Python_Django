var express = require('express');
var router = express.Router();

/*
 * GET home page.
 */
var getHome = function(req, res){
  res.render('index', { title: 'Hello World' });
};

router.get('/', getHome);

module.exports = router;