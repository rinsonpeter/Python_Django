import { Router } from 'express';
//import Project from './project';
import Employee from './employee';
import Department from './department';
import Project from './project';
//import loginPage from ''

const router=Router();

router.use('/employees',Employee);
router.use('/departments',Department);
router.use('/projects',Project);




export default router;