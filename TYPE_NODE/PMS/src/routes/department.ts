import DepartmentController from '../controller/DepartmentControllers';
import { join } from 'path';
import { Router } from 'express';
const router=Router()


router.get('/',async function(req,res){
    DepartmentController.getDepartments().then(data=>{
        res.send(data)
        //res.render('pages/departments',{data:data})
    })
})

// router.get('/:id',async function(req,res){
//     DepartmentController.getDepartments(req.params.id).then(data=>{
//         res.send(data)
//         //res.render('pages/departments',{data:data})
//     })
// })




export default router;