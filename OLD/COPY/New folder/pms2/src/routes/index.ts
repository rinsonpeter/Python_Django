import { Router } from 'express';
//import Project from './project';
import Employee from './employee';
import Department from './department';
import Users from './users'

const router=Router();

//router.use('/projects',Project);
router.use('/employees',Employee);
router.use('/departments',Department);
router.use('/users',Users);


export default router;