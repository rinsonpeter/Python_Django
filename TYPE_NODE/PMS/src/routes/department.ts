import { Router } from 'express';
import DepartmentController from '../controller/DepartmentController';
import { join } from 'path';
const router=Router()



router.get('/',async function(req,res){
    DepartmentController.getDepartments().then(data=>{
        req.render('pages/departments',{data:data})
    })
})

router.get('/:id',async function(req,res){
    DepartmentController.getDepartments(req.params.id).then(data=>{
        req.render('pages/departments',{data:data})
    })
})




export default router;