var express = require('express');
var router = express.Router();



var leaverequestpage =function(req, res, next){
  var empId=req.session.empId;
  
    console.log('hello',empId)
    
    if(empId){ 
        res.render('leaverequests',{type:req.session.userType});
        }
  }


var addleaverequest=function(req, res, next) 
  {
    var empId=req.session.empId;
    if(empId)
    { 
    var empId=req.session.empId;
    var leavetype=req.body.ddlleave;
    var from=req.body.From;
    var to=req.body.To;
    var reason=req.body.Reason;
    var file=req.body.File;
    var applyDate=new Date().toISOString().split('T')[0];


    
                          // calculation of no. of days between two date 
                   // To set two dates to two variables
                          var date1 = new Date(from);
                          var date2 = new Date(to);
   
                               // To calculate the time difference of two dates
                               var Dif = date2.getTime() - date1.getTime();
   
                               // To calculate the no. of days between two dates
                                var daysDiff = Dif / (1000 * 3600 * 24);

    console.log(empId,leavetype,from,to,reason,applyDate,daysDiff)
    }
  req.getConnection(function(err, connection) 
    {
      if (err) console.log(err);
     
      var sql ='INSERT INTO  leaverequests(emp_id,leavetype,from_date,to_date,reason,file,apply_date,days)VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
      
    
       connection.query(sql,[empId,leavetype,from,to,reason,file,applyDate,daysDiff],function(err, results) 
       {
         if(err) console.log(err);
        
         
       
         res.redirect('/users')
         
     
       });
      });  
  }  


  router.get('/',leaverequestpage);
  router.post('/',addleaverequest);


  module.exports = router;