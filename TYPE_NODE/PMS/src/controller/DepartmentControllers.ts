import {Request,Response,NextFunction} from 'express'
import {getConnection,getRepository} from 'typeorm'
import { Department } from '../entity/department'

export class DepartmentController{
    static getDepartments= async (req:Request, res: Response, next: NextFunction)=>{
        const department=await getRepository(Department).createQueryBuilder("dept").orderBy('depat.name').getMany();

        console.log(department);

        res.render('pages/departmentList',{data:department,
        title:'Departments'})

    }
}