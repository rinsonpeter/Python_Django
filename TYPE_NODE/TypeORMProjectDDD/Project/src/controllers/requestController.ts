import { Request, Response, NextFunction } from "express";
import { getConnection, getRepository } from "typeorm";
import { Employes } from "../entity/employes";
import { Department } from "../entity/department";
import { LeaveRequest } from "../entity/leaverequest";
import * as moment from "moment";


export class RequestController {

  //add leaverequest

  static addLeave = async (req: Request, res: Response, next: NextFunction) => {
    const empId = req.session.empId;
    if (empId) {

      const { ddlleave, From, To, Reason, File } = req.body;
      const today = moment(new Date).format('YYYY-MM-DD');
      var date1 = new Date(From), date2 = new Date(To);
      var Dif = date2.getTime() - date1.getTime(); //  calculate the time difference of two dates
      var Daysdiff = Dif / (1000 * 3600 * 24); //  calculate the no. of days between two dates
      console.log('output is', today, Daysdiff)


      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(LeaveRequest)
        .values([
          { employe: empId, leaveType: ddlleave, fromDate: From, toDate: To, reason: Reason, file: File, applyDate: today, days: Daysdiff },
        ])
        .execute();
    }

    res.redirect('/homepage');
  }


  //pending requests of employess under a reporting Officer
  static pendingLeave = async (req: Request, res: Response, next: NextFunction) => {

    var empId = req.session.empId;
    var userType = req.session.userType;

    if (empId) {
      const pending = await getConnection()
        .createQueryBuilder('LeaveRequest', 'lr')
        .innerJoinAndSelect('lr.employe', 'e')
        .leftJoinAndSelect('e.department', 'd')
        .where("e.repOfficer = :id", { id: empId })
        .andWhere("lr.status = :status", { status: "Pending" })
        .orderBy('lr.applyDate', 'DESC')
        .getMany()
      console.log('')
      res.render('pages/pendingRequests', { data: pending, type: userType, title: "PendingRequest" });
    }
  }

 //Leave Approved by reporting officer
  static approval = async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id;

    await getConnection()
      .createQueryBuilder()
      .update(LeaveRequest)
      .set({ status: "Approved" })
      .where("id = :id", { id: id })
      .execute();

    res.redirect('/requests/pendingRequest')



  }

//leave Rejected by Reporting officer
  static rejection = async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id;
    const comments = req.body.comments;

    await getConnection()
      .createQueryBuilder()
      .update(LeaveRequest)
      .set({ status: "Rejected", rejectReason: comments })
      .where("id = :id", { id: id })
      .execute();
    res.redirect('/requests/pendingRequest')





  }


  //Departmentwise List 
  static departmentList = async (req: Request, res: Response, next: NextFunction) => {

    var userType = req.session.userType;
    if (userType) {
      const department = await getRepository(Department)
        .createQueryBuilder("dept")
        .orderBy('dept.name')
        .getMany();

      console.log(department);

      res.render('pages/departmentList', { data: department, type: userType, title: 'RequestList' });
    }

  }


 //All depaertment employes Leave Requests
  static allRequests = async (req: Request, res: Response, next: NextFunction) => {

    var empId = req.session.empId;
    var userType = req.session.userType;

    if (empId) {
      const allleaves = await getConnection()
        .createQueryBuilder('LeaveRequest', 'lr')
        .innerJoinAndSelect('lr.employe', 'e')
        .leftJoinAndSelect('e.department', 'd')
        .orderBy('lr.applyDate', 'DESC')
        .getMany()
      console.log('')
      res.render('pages/leaverequestlist', { data: allleaves, type: userType, title: 'RequestList', dept: "All" });
    }

  }


//All depaertment employes Leave Requests Filter By Date
  static dateWiseAllRequests = async (req: Request, res: Response, next: NextFunction) => {

    var empId = req.session.empId;
    var userType = req.session.userType;
    const { From, To } = req.body;




    if (empId) {

      console.log("department")

      const allleaves = await getConnection()
        .createQueryBuilder('LeaveRequest', 'lr')
        .innerJoinAndSelect('lr.employe', 'e')
        .leftJoinAndSelect('e.department', 'd')
        .where("lr.applyDate >= :id", { id: From })
        .andWhere("lr.applyDate <= :id1", { id1: To })
        .getMany()

      res.render('pages/leaverequestlist', { data: allleaves, type: userType, dept: "", title: 'RequestList' });
    }
  }


//Employes Leave Requests in a department
  static departmentWiseRequests = async (req: Request, res: Response, next: NextFunction) => {
    console.log('this is working')
    var userType = req.session.userType;
    const id = req.params.id;



    if (userType) {



      const dept = await getRepository(Department)
        .createQueryBuilder("dept")
        .where("dept.id = :id1", { id1: id })
        .getOne()
      console.log(dept)
      console.log("department")


      const allleaves = await getConnection()
        .createQueryBuilder('LeaveRequest', 'lr')
        .innerJoinAndSelect('lr.employe', 'e')
        .leftJoinAndSelect('e.department', 'd')
        .where("d.id = :id", { id: id })
        .orderBy('lr.applyDate', 'DESC')
        .getMany()

      res.render('pages/leaverequestlist', { data: allleaves, type: userType, dept: dept, title: 'RequestList' });
    }

  }

//Employes Leave Requests in a department Filter by Date
  static datewiseDepartment = async (req: Request, res: Response, next: NextFunction) => {

    var empId = req.session.empId;
    var userType = req.session.userType;
    const { From, To } = req.body;
    const id = req.params.id;



    if (empId) {

      const dept = await getRepository(Department)
        .createQueryBuilder("dept")
        .where("dept.id = :id1", { id1: id })
        .getOne()
      console.log(dept)
      console.log("department")

      const allleaves = await getConnection()
        .createQueryBuilder('LeaveRequest', 'lr')
        .innerJoinAndSelect('lr.employe', 'e')
        .leftJoinAndSelect('e.department', 'd')
        .where("d.id = :id", { id: id })
        .andWhere("lr.applyDate >= :id1", { id1: From })
        .andWhere("lr.applyDate <= :id2", { id2: To })
        .getMany()




      res.render('pages/leaverequestlist', { data: allleaves, type: userType, dept: dept, title: 'RequestList' });
    }
  }


}






