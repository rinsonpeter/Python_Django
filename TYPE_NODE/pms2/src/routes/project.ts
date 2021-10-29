import ProjectController from "../controller/ProjectController";
import WorksOnController from "../controller/WorksOnController";

import { Router } from "express";
const router = Router();


//get list of all projects

router.get("/", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    //console.log("inside routes project");
    ProjectController.getProjects().then((data) => {
      res.render("pages/prjAll1", { data: data, userType: userType });
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

// get page for new project creation

router.get("/create", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    res.render("pages/prjAdd");
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

// post method for creating new project

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

// get method for editing a selected project

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

// post method for saving the edited project

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

//get method to view info of a selected project

router.get("/info/:id", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    var id = req.params.id;
    console.log("check id--------", id);
    ProjectController.infoProject(id).then((data) => {
      res.render("pages/prjInfo", {
        data: data.prj,
        data2: data.posts,
        data3: data.id,
        userType: userType,
      });
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

// delete a selected project 

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

// Adding an employee to a selected project (inside project detail page)

router.post("/addToProject/:id", async function (req, res) {
  console.log(">>> insde add an employee to  project route");
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    var id = req.params.id;
    var input = req.body;

    var addWorksOn = {
      hours: input.hours,
      WorkProjectR: id,
      WorkEmpR: input.empList,
    };
    console.log("add works on:*****", addWorksOn);
    WorksOnController.addToProject(addWorksOn).then((data) => {
      console.log("check id check", id);
      res.redirect("/projects/info/" + id);
    });
    //res.redirect("/projects");
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

// Removing an employee from a selected project

router.get("/projectDelete/:workOnid/:projectId", async function (req, res) {
  
  var empEmail = req.session.empEmail;
  var userType = req.session.userType;

  var worksOnId = req.params.workOnid;
  var projectId = req.params.projectId;

  if (empEmail) {
    WorksOnController.deleteEmpProject(worksOnId).then((data) => {
      //res.send(data)
      res.redirect("/projects/Info/" + projectId);
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});


export default router;
