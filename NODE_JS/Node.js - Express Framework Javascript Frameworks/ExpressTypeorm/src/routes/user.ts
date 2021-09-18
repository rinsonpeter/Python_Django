import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.all);
router.get('/:id', UserController.getUser);

export default router;