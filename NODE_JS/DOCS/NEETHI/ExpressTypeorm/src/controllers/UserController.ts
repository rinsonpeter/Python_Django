import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    static all = async (request: Request, response: Response, next: NextFunction) => {
        const userRepository = getRepository(User);
        const users= await userRepository.find();
        response.render('page',{data: users}) ;
    }
    static getUser = async (request: Request, response: Response, next: NextFunction) => {
        const userRepository = getRepository(User);
        const user= await userRepository.findOne(request.params.id);
        response.render('UserProfile',{data: user}) ;
    }

}

export default UserController;