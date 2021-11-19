import EmployeeController from "../controller/EmployeeController";
import { join } from "path";
import { Router } from "express";
const router = Router();

// get page for creating new employees

router.get("/create", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    EmployeeController.createEmployees().then((data) => {
      res.render("pages/empAdd", { data: data });
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

// post method for creating new employees

router.post("/create", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    var input = req.body;
    var empData = {
      name: input.name,
      designation: input.designation,
      hireDate: input.hireDate,
      salary: input.salary,
      comments: input.comments,
      departmentR: input.departmentR,
      email: input.email,
      password: input.password,
      usertype: input.usertype,
    };
    EmployeeController.saveEmployees(empData).then((data) => {
      res.redirect("/employees");
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

// get page of listing all current employees

router.get("/", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    EmployeeController.getEmployees().then((data) => {
      //res.send(data)
      res.render("pages/empAll", { data: data, userType: userType });
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

// deleting an employee

router.get("/delete/:id", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    var id = req.params.id;
    console.log("inside delete employee route");
    EmployeeController.deleteEmployees(id).then((data) => {
      //res.send(data)
      res.redirect("/employees");
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

// post method for editing an employee detail

router.post("/edit/:id", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    var input = req.body;
    var id = req.params.id;
    var myData = {
      name: input.name,
      designation: input.designation,
      hireDate: input.hireDate,
      salary: input.salary,
      comments: input.comments,
      departmentR: input.department,
      email: input.email,
      password: input.password,
      usertype: input.usertype,
    };
    EmployeeController.saveEditEmployees(myData, id).then((data) => {
      res.redirect("/employees");
    });
  } else {
    res.render("pages/loginPage", { errorMessage: "Please Login to continue" });
  }
});

// get method login page

router.get("/getLogin", async function (req, res) {
  console.log("insied get login");
  req.session.destroy();
  res.render("pages/loginPage", { errorMessage: "" });
});

// post method login page

router.post("/postLogin", async function (req, res) {
  console.log(req.body)
  var inpEmail = req.body.username;
  var inpPassword = req.body.password;
  EmployeeController.postLogin(inpEmail, inpPassword).then((data) => {
    if (data) {
      console.log("inside if");
      req.session.empEmail = data.email;
      req.session.userType = data.usertype;
      console.log("REQ SESSION*********", req.session);
      res.send("hello")
      //res.redirect("/projects");
    } else {
      console.log("inside else");
      res.send("invalid")
      //res.render("pages/loginPage", { errorMessage: "Invalid Credentials" });
    }
  });
});

// get more info page of an employee

router.get("/info/:id", EmployeeController.infoEmployees);

// get method for editing employee detail

router.get("/edit/:id", EmployeeController.editEmployees);

export default router;
