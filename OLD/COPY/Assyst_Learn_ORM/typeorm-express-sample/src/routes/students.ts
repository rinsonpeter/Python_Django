import { Router } from "express";
import { studentscontroller } from '../controller/studentscontroller';

const router = Router();


router.get('/',async function(req,res){
    studentscontroller.studentdetails().then(data=>{
        //res.send(data)
         res.render('pages/studentdetails',{data:data})
    })
})

router.get('/studentInfo/:studentid',async function(req,res){
    studentscontroller.studentdetails().then(data=>{
        //res.send(data)
         res.render('pages/studentInfo',{data:data})
    })
})

export default router;

