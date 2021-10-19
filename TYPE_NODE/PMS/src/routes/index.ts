import { Router } from 'express';
//import Project from './project';
import Employee from './employee';
import Department from './department';

const router=Router();

//router.use('/projects',Project);
router.use('/employee',Employee);
router.use('/departments',Department);



export default router;