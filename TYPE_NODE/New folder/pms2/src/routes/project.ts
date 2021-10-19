import ProjectController from "../controller/ProjectController";
import WorksOnController from "../controller/WorksOnController"

import { Router } from "express";
const router = Router();

router.get("/", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  console.log("project all :sess type***",userType)
  if (empEmail) {
    //console.log("inside routes project");
    ProjectController.getProjects().then((data) => {
      res.render("pages/prjAll", { data: data,userType:userType });
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

router.get("/create", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    res.render("pages/prjAdd");
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

router.post("/create", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    console.log("inside post create project");
    var input = req.body;
    var prjData = {
      pName: input.pName,
      startDate: input.startDate,
      duration: input.duration,
      budget: input.budget,
    };
    ProjectController.saveProject(prjData).then((data) => {});
    res.redirect("/projects");
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

router.get("/edit/:id", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    console.log(">>>inside routes edit project");
    var id = req.params.id;
    ProjectController.editProject(id).then((data) => {
      //res.send(data);
      res.render("pages/prjEdit", { data: data });
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

router.post("/edit/:id", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    var input = req.body;
    var id = req.params.id;
    var prjData = {
      pName: input.pName,
      startDate: input.startDate,
      duration: input.duration,
      budget: input.budget,
    };
    ProjectController.saveEditProject(prjData, id).then((data) => {
      res.redirect("/projects");
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

router.get("/info/:id", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
   // console.log(">>>inside routes info project");
    var id = req.params.id;
    console.log("check id--------",id)
    ProjectController.infoProject(id).then((data) => {
     console.log("--------------",data)
      res.render("pages/prjInfo", 
          { data: data.prj
            ,data2:data.posts
            , data3:data.id});
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

router.get("/delete/:id", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    var id = req.params.id;
    ProjectController.deleteProject(id).then((data) => {
      res.redirect("/projects");
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});


router.post("/addToProject/:id", async function (req, res) {
  console.log("insied add to project route")
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    var id = req.params.id;
    var input= req.body;

    var addWorksOn={
      hours         :input.hours,
      WorkProjectR:id,
      WorkEmpR    :input.empList
    }
    console.log("add works on:*****",addWorksOn)
    WorksOnController.addToProject(addWorksOn).then((data) => {
      console.log("check id check",id)
      res.redirect("/projects/info/"+id);
    });
    //res.redirect("/projects");
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});



export default router;
