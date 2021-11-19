import {Request,Response,NextFunction} from 'express'
import {getConnection,getRepository} from 'typeorm'
import { Courses } from '../entity/courses'

export class coursescontroller{
    static coursedetails= async ()=>{
        const courses=await getRepository(Courses)
        .find();
        return courses;
    }
}

export default coursescontroller;