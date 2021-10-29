import { Request, Response, NextFunction } from "express";
import { getConnection, getRepository } from "typeorm";
import { Department } from "../entity/Department";
import { Employee } from "../entity/Employee";
import { Project } from "../entity/Project";
import { WorksOn } from "../entity/worksOn";
import { IsNull } from "typeorm";


export class ProjectController {
  static getProjects = async () => {
    const emp = await getRepository(Project).find();
    return emp;
  };

  static saveProject = async (prjData) => {
    //console.log("PRJDATA:::::::", prjData);
    const newPrj = await getRepository(Project)
      .createQueryBuilder("prj")
      .insert()
      .into(Project)
      .values(prjData)
      .execute();

    return newPrj;
  };
  
  static saveEditProject = async (myData, id) => {
    const editPrj = await getConnection()
      .createQueryBuilder()
      .update(Project)
      .set(myData)
      .where("project.id = :id", { id })
      .execute();
    return editPrj;
  };

  static editProject = async (id) => {
    const emp = await getRepository(Project)
    .find({ where: { id: id } });
    //console.log(emp);
    return emp;
  };

  static infoProject = async (id) => {
    const prj: any = await getRepository(Project)
      .createQueryBuilder("prj")
      .leftJoinAndSelect("prj.ProjectWorkR", "worksOn")
      .leftJoinAndSelect("worksOn.WorkEmpR", "emp")
      .where("prj.id=:id", { id: id })
      .getOne();

      const addEmpList: any =await getRepository(Employee)
        .createQueryBuilder("emp")
        .leftJoinAndSelect('emp.EmpWorkR',"worksOn")
        .where("worksOn.WorkProjectR = :id", { id: id })
        //.andWhere("worksOn.WorkEmpR = :val",{val:''})
        .getMany();

       // console.log("addemp:****",addEmpList)

        var authors = [];

        for (let i in addEmpList){
          authors.push(addEmpList[i].id)
        }
        //console.log("authors**********",authors)

      if (authors.length >0){
       var posts: any = await getRepository(Employee)
       .createQueryBuilder("emp")
       .where("emp.id NOT IN (:...authors)", { authors: authors })
       .getMany();
       
      }
      else{
        var posts: any = await getRepository("Employee")
        .createQueryBuilder("emp")
        .getMany();
      }  

      //console.log("POSTS*****",posts)

    return {prj,posts,id};
  };

  static deleteProject = async (id) => {
    //console.log("inside controller delete emp")
    await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Project)
    .where("id = :id", { id: id })
    .execute();
    return
  };
}


export default ProjectController;
