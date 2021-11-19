import {Request,Response,NextFunction} from 'express'
import {getConnection,getRepository} from 'typeorm'
import { Students } from '../entity/students'

export class studentscontroller{
    static studentdetails= async ()=>{
        const students=await getRepository(Students)
        .find();
        return students;
    }
}

export default studentscontroller;