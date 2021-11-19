import { Request, Response, NextFunction } from "express";
import { getConnection, getRepository } from "typeorm";
import { Department } from "../entity/Department";
import { Employee } from "../entity/Employee";
import { WorksOn } from "../entity/worksOn";

export class EmployeeController {

  static getEmployees = async () => {
    const emp = await getRepository(Employee).find();
    return emp;
  };
  
  static postLogin = async (email,pass) => {
    const emp: any = await getRepository(Employee)
      .createQueryBuilder("emp")
      .where("emp.email = :email", {email: email })
      .andWhere("emp.password = :pass",{pass:pass})
      .getOne();
    //console.log(emp)

    if (emp)
      return emp
    else
      return 
  };

  static infoEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log("inside info employees");
    const id = req.params.id;
    console.log(id);
    console.log("inside controller employee");
    const emp = await getRepository(Employee)
      .createQueryBuilder("emp")
      .leftJoinAndSelect("emp.departmentR", "department")
      .leftJoinAndSelect("emp.EmpWorkR", "worksOn")
      .leftJoinAndSelect("worksOn.WorkProjectR", "project")
      .where("emp.id = :id", { id: id })
      .getOne();
    console.log("emp: ", emp);
    //res.send(emp)
    res.render('pages/empInfo',{data:emp})
  };

  static editEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    const emp = await getRepository(Employee)
      .createQueryBuilder("emp")
      .leftJoinAndSelect("emp.departmentR", "department")
      .where("emp.id = :id", { id: id })
      .getMany();

    const dep = await getRepository(Department)
      .createQueryBuilder("dept")
      .getMany();
    res.render("pages/empEdit", { data: emp, data2: dep });
  };

  static saveEditEmployees = async (myData, id) => {
    const myEmp = await getConnection()
      .createQueryBuilder()
      .update(Employee)
      .set(myData)
      .where("Employee.id = :id", { id })
      .execute();
    return myEmp;
  };

  static deleteEmployees = async (id) => {
    console.log("inside controller delete emp")
    await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Employee)
    .where("id = :id", { id: id })
    .execute();
    return
  };

  static createEmployees = async () => {
    console.log("inside add employye");
    const dep = await getRepository(Department)
      .createQueryBuilder("dept")
      .getMany();
    return dep;
  };

  static saveEmployees = async (empData) => {
    const newEmp = await getRepository(Employee)
        .createQueryBuilder("emp")
        .insert()
        .into(Employee)
        .values(empData)
        .execute();
    return newEmp;
  };
}

export default EmployeeController;



























// correct info employee function  here
//     static infoEmployees = async (req: Request, res: Response, next: NextFunction) =>{
//         console.log("inside info employees");
//         const id=req.params.id
//         console.log(id)
//         console.log("inside controller employee");
//         const emp=await getRepository(Employee)
//         .createQueryBuilder("emp")
//         .leftJoinAndSelect("emp.department", "department")
//         .where("emp.id = :id", { id: id })
//         .getOne();
//         console.log("emp: ",emp);

//         const prj=await getRepository(WorksOn)
//         .createQueryBuilder('workson')
//         .leftJoinAndSelect("workson.Projectid","Projectid")
//         .where('workson.employeeidId=:id',{id:id})
//         .getMany();
//         console.log("prj: ",prj);

//         res.send({data:emp,data2:prj})
//         // res.status(200).send(res.body)
//         //res.render('pages/empInfo',{data:emp,data2:prj})
//     }
// static InfoEmployees = async (req: Request, res: Response, next: NextFunction) =>{
//     console.log("inside info employees");
//     const id=req.params.id
//     console.log(id)
//     console.log("inside controller employee");
//     const emp=await getRepository(Employee)
//     .createQueryBuilder("emp")
//     .leftJoinAndSelect("emp.department", "department")
//     .leftJoinAndSelect("emp.employeeid","worksOn")
//     .leftJoinAndSelect("worksOn.Projectid","project")
//     .where("emp.id = :id", { id: id })
//     .getOne();
//     console.log("emp: ",emp);
//     // console.log("emp department",emp.department)
//     // console.log("emp.department.name",emp.department.name)
//     // console.log("project: ",emp.)

//     // const prj=await getRepository(WorksOn)
//     // .createQueryBuilder('workson')
//     // .leftJoinAndSelect("workson.Projectid","Projectid")
//     // //.select("workson.projectidId")
//     // .where('workson.employeeidId=:id',{id:id})
//     // .getMany();
//     // console.log("prj: ",prj)

//     res.send(emp)
//     //res.render('pages/empInfo',{data:emp})
// }

// static InfoEmployees = async (req: Request, res: Response, next: NextFunction) =>{
//     console.log("inside info employees");
//     const id=req.params.id
//     console.log(id)
//     console.log("inside controller employee");
//     const emp=await getRepository(Employee)
//     .createQueryBuilder("emp")
//     .leftJoinAndSelect("emp.department", "department")
//     .where("emp.id = :id", { id: id })
//     .getOne();
//     console.log(emp);

//     const prj=await getRepository(WorksOn)
//     .createQueryBuilder('workson')
//     .innerJoinAndSelect("workson.Projectid","Projectid")
//     .where('workson.Projectid=:id',{id:id})
//     .getMany();
//     console.log(prj)

//     res.send({data:emp,data2:prj})
//     // res.status(200).send(res.body)
//     //res.render('pages/empInfo',{data:emp,data2:prj})
// }
