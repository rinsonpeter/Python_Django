var express = require('express');
var router = express.Router();
const multer=require('multer')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

router.post('/',(req,res)=>{
  res.send("Image Uploaded")
})

module.exports = router;
