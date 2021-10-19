import { Router } from "express";
import { coursescontroller } from '../controller/coursescontroller';


const router = Router();


router.get('/',async function(req,res){

    coursescontroller.coursedetails().then(data=>{
        //res.send(data)
         res.render('pages/coursedetails',{data:data})
    })
})

router.get('/courseInfo/:courseid',async function(req,res){

    coursescontroller.coursedetails().then(data=>{
        //res.send(data)
         res.render('pages/courseInfo',{data:data})
    })
})


export default router;



