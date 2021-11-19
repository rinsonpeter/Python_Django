import DepartmentController from '../controller/DepartmentContoller';
import { join } from 'path';
import { Router } from 'express';
const router=Router()


router.get('/',async function(req,res){
    console.log("inside controller department");
    DepartmentController.getDepartments().then(data=>{
        //res.send(data)
        res.render('pages/deptAll',{data:data})
    })
})

// router.get('/edit/:id',async function(req,res){
//     console.log("inside controller department");
//     DepartmentController.editDepartment().then(data=>{
//         //res.send(data)
//         res.render('pages/deptAll',{data:data})
//     })
// })


export default router;
