var express = require('express');
var router = express.Router();

var leaverequestList=function(req, res, next) {
    
  
    req.getConnection(function(err, connection) 
    {
      if (err) console.log(err);

       connection.query('select r.*,e.name,d.department from leaverequests r inner join employes e on r.emp_id=e.emp_id inner join departments d on e.dept_id=d.dept_id ORDER BY r.apply_date desc',
    function(err,results) 
    {
      if (err) console.log(err);
      console.log(results);
      
      
     // res.send('success');
    res.render('leaverequestlist',{title:"LeaveRequestList",data:results,type:req.session.userType});
   
    });
      
      
     
      });
    }

    router.post('/', function(req, res, next) {
      month=req.body.month
      req.getConnection(function(err, connection) 
    {
      if (err) console.log(err);

       connection.query('select r.*,month(r.apply_date),e.name,d.department from leaverequests r inner join employes e on r.emp_id=e.emp_id inner join departments d on e.dept_id=d.dept_id where month(r.apply_date)=? ORDER BY r.apply_date desc', [month],
    function(err,results) 
    {
      if (err) console.log(err);
      console.log(results);
      
    
    res.render('leaverequestlist',{title:"LeaveRequestList",data:results,type:req.session.userType});
   
    });
      
      
     
      });
      
    });


router.get('/',leaverequestList);

module.exports = router;
