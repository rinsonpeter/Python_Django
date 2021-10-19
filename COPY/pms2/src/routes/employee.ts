import EmployeeController from '../controller/EmployeeController';
import { join } from 'path';
import { Router } from 'express';
const router=Router()



router.get('/',async function(req,res){
    console.log("inside routes employee");
    EmployeeController.getEmployees().then(data=>{
        //res.send(data)
        res.render('pages/getAllEmp',{data:data})
    })
})
router.get('/:id',async function(req,res){
    console.log("inside routes employee");
    EmployeeController.InfoEmployees().then(data=>{
        //res.send(data)
        res.render('pages/getAllEmp',{data:data})
    })
})

export default router;