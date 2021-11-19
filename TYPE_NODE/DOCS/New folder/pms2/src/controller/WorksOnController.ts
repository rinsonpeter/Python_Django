import { Request, Response, NextFunction } from "express";
import { getConnection, getRepository } from "typeorm";
import { Department } from "../entity/Department";
import { Employee } from "../entity/Employee";
import { Project } from "../entity/Project";
import { WorksOn } from "../entity/worksOn";
import { IsNull } from "typeorm";


export class WorksOnController {
  static addToProject = async (addWorksOn) => {
      console.log("iside add to controller")
    const works = await getRepository(WorksOn)
        .createQueryBuilder("wrk")
        .insert()
        .into(WorksOn)
        .values(addWorksOn)
        .execute();

        console.log("works added col",works)
    return works;

  }

    static deleteEmpProject = async (worksOnId) => {
      console.log("iside delete to controller")
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(WorksOn)
      .where("worksOnId = :worksOnId", { worksOnId: worksOnId })
      .execute();
      return
      
    };

  

}


export default WorksOnController;
