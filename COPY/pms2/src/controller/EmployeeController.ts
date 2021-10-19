import {Request,Response,NextFunction} from 'express'
import {getConnection,getRepository} from 'typeorm'
import { Employee } from '../entity/Employee'

export class EmployeeController{
    static getEmployees= async ()=>{
        console.log("inside controller employee");
        const emp=await getRepository(Employee)
        .find();
        // .createQueryBuilder("dept")
        // .orderBy('dept.name')
        // .getMany();
        console.log(emp);
        return emp;
    }
    static InfoEmployees=async ()=>{
        console.log("inside controller employee");
        const emp=await getRepository(Employee)
        .findOne();
        // .createQueryBuilder("dept")
        // .orderBy('dept.name')
        // .getMany();
        console.log(emp);
        return emp;

    }
}    
export default EmployeeController;