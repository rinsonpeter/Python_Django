import EmployeeController from "../controller/EmployeeController";
import { join } from "path";
import { Router } from "express";
const router = Router();

router.get("/create", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    EmployeeController.createEmployees().then((data) => {
      res.render("pages/empAdd", { data: data });
    });
  }
  else{
    res.render("pages/loginPage",
      {errorMessage:"Please Login to continue"})
  }

});

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

router.get("/", async function (req, res) {
  let empEmail = req.session.empEmail;
  var userType = req.session.userType;
  if (empEmail) {
    console.log("sess emp email:", empEmail);
    console.log("sess type:", userType);
    console.log("inside routes get all employee");
    EmployeeController.getEmployees().then((data) => {
      //res.send(data)
      res.render("pages/empAll", { data: data ,userType:userType});
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
    console.log("inside delete employee route");
    EmployeeController.deleteEmployees(id).then((data) => {
      //res.send(data)
      res.redirect("/employees");
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

router.get("/getLogin", async function (req, res) {
  console.log("insied get login");
  req.session.destroy();
  res.render("pages/loginPage", { errorMessage: "" });
});

router.post("/postLogin", async function (req, res) {
  var inpEmail = req.body.username;
  var inpPassword = req.body.password;
  EmployeeController.postLogin(inpEmail, inpPassword).then((data) => {
    if (data) {
      console.log("inside if");
      req.session.empEmail = data.email;
      req.session.userType = data.usertype;
      console.log("REQ SESSION*********", req.session);
      res.redirect("/employees")

    } else {
      console.log("inside else");
      res.render("pages/loginPage", { errorMessage: "Invalid Credentials" });
    }
  });
});

router.get("/info/:id", EmployeeController.infoEmployees);
router.get("/edit/:id", EmployeeController.editEmployees);

export default router;
