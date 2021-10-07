import { Router } from "express";
import { UserController } from '../controllers/userController'
const userRouter = Router();


userRouter.get('/', UserController.getLogin);

userRouter.post('/', UserController.loginAuthenticate);

userRouter.get('/homepage', UserController.getHomepage);

userRouter.post('/homepage', UserController.getHomepage);

userRouter.get('/logout', UserController.logOut);



                                        



export default userRouter;


