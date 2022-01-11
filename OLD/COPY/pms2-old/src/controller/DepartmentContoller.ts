import {Request,Response,NextFunction} from 'express'
import {getConnection,getRepository} from 'typeorm'
import { Department } from '../entity/department'

export class DepartmentController{
    static getDepartments= async ()=>{
        console.log("inside router department");
        const department=await getRepository(Department)
        .find();
        // .createQueryBuilder("dept")
        // .orderBy('dept.name')
        // .getMany();
        console.log(department);
        return department;
    }
}

export default DepartmentController;