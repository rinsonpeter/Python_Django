import { Request, Response, NextFunction } from "express";
import { getRepository, getConnection } from "typeorm";
import { Employes } from "../entity/employes";
import { LeaveRequest } from "../entity/leaverequest";


export class UserController {

    //get login page
    static getLogin = async (req: Request, res: Response, next: NextFunction) => {
        res.render('pages/login')
    }



    //login authentication
    static loginAuthenticate = async (req: Request, res: Response, next: NextFunction) => {

        const userRepository = getRepository(Employes)
        const { username, password } = req.body;
        const userValidate = await userRepository.findOne({
            email: username, password: password
        });


        if (userValidate) {

            req.session.empId = userValidate.id;
            req.session.userType = userValidate.usertype;
            res.redirect('/homepage');

        }

        else {
            res.send('invalid username and password')

        }

    }



    //get homepage
    static getHomepage = async (req: Request, res: Response, next: NextFunction) => {



        let empId = req.session.empId;
        var userType = req.session.userType;
        var Leave = req.body.ddlleave;
        var casualPending = 0, sickPending = 0, earnedPending = 0, lopPending = 0;
        var casualAvailed = 0, sickAvailed = 0, earnedAvailed = 0, lopAvailed = 0;
        var totalCasual = 20, totalSick = 10, totalEarned = 5, totalLop = 6;
        console.log(Leave)


        if (empId) {

            const employeDetails = await getRepository(Employes) //employes details
                .createQueryBuilder("employe")
                .where("employe.id = :id", { id: empId })
                .getOne();


            const allLeaves = await getRepository(LeaveRequest) //Leave history
                .createQueryBuilder("requests")
                .where("requests.employe = :id", { id: empId })
                .orderBy('requests.id', 'DESC')
                .getMany();


            const pendingCounts = await getConnection() // for count badge of reporting officer page
                .createQueryBuilder('LeaveRequest', 'lr')
                .innerJoinAndSelect('lr.employe', 'e')
                .leftJoinAndSelect('e.department', 'd')
                .where("e.repOfficer = :id", { id: empId })
                .andWhere("lr.status = :status", { status: "Pending" })
                .orderBy('lr.applyDate', 'DESC')
                .getMany()




            for (var j = 0; j < allLeaves.length; j++) {


                //counting no of Pending Leaves
                if (allLeaves[j].status == "Pending" && allLeaves[j].leaveType == "Casual Leave") casualPending += 1;

                if (allLeaves[j].status == "Pending" && allLeaves[j].leaveType == "Sick Leave") sickPending += 1;

                if (allLeaves[j].status == "Pending" && allLeaves[j].leaveType == "Earned leave") earnedPending += 1;

                if (allLeaves[j].status == "Pending" && allLeaves[j].leaveType == "Loss Of Pay") lopPending += 1;


                //counting availed leaves 
                if (allLeaves[j].status == "Approved" && allLeaves[j].leaveType == "Casual Leave") casualAvailed += 1;     //count of availed casualleave

                if (allLeaves[j].status == "Approved" && allLeaves[j].leaveType == "Sick Leave") sickAvailed += 1; //count of availed sickleave 

                if (allLeaves[j].status == "Approved" && allLeaves[j].leaveType == "Earned leave") earnedAvailed += 1;

                if (allLeaves[j].status == "Approved" && allLeaves[j].leaveType == "Loss Of Pay") lopAvailed += 1;

            }


            //calculating balance leave   
            var casualBalance = totalCasual - (casualPending + casualAvailed);
            var sickBalance = totalSick - (sickPending + sickAvailed);
            var earnedBalance = totalEarned - (earnedPending + earnedAvailed);
            var lopBalance = totalLop - (lopPending + lopAvailed);



            //render page
            if (Leave == "Casual Leave") render(Leave, totalCasual, casualAvailed, casualPending, casualBalance, employeDetails, allLeaves, pendingCounts);
            if (Leave == "Sick Leave") render(Leave, totalSick, sickAvailed, sickPending, sickBalance, employeDetails, allLeaves, pendingCounts);
            if (Leave == "Earned Leave") render(Leave, totalEarned, earnedAvailed, earnedPending, earnedBalance, employeDetails, allLeaves, pendingCounts);
            if (Leave == "Loss Of Pay") render(Leave, totalLop, lopAvailed, lopPending, lopBalance, employeDetails, allLeaves, pendingCounts);
            else render('', 0, 0, 0, 0, employeDetails, allLeaves, pendingCounts)

        }

        //Render Function
        function render(Leave, total, availed, pending, balance, employeDetails, allLeaves, pendingCounts) {

            res.render('pages/homePage',
                {
                    profile: employeDetails,
                    data: allLeaves,
                    head: Leave,
                    title: 'HomePage',
                    type: userType,
                    total: total,
                    availed: availed,
                    pending: pending,
                    balance: balance,
                    counts: pendingCounts
                });

        }
    }



    //logout
    static logOut = async (req: Request, res: Response, next: NextFunction) => {

        req.session.destroy();
        res.redirect('/')
    }


}








