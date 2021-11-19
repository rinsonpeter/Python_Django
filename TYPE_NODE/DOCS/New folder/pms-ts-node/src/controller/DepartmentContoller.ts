import {Request,Response,NextFunction} from 'express'
import {getConnection,getRepository} from 'typeorm'
import { Department } from '../entity/Department'

export class DepartmentController{
    static getDepartments= async ()=>{
        console.log("inside router department");
        const department=await getRepository(Department)
        .find();
        console.log(department);
        return department;
    };
    static editDepartment= async ()=>{
        console.log("inside router department");
        const department=await getRepository(Department)
        .find();
        console.log(department);
        return department;
    };
}


export default DepartmentController;