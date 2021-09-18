import { Router } from 'express';
import  User  from './user';

const router = Router();


router.use('/users', User);

router.get('/', function(req,res,next) {
    res.render("index", {data: "Welcome to Node Express app using TypeOrm"})
});

export default router;