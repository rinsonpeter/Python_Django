import { Router } from "express";
import courses from './courses';
import students from './students';


const router=Router();

router.use('/courses', courses);
router.use('/students', students);




export default router;
