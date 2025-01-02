const express = require("express");
const router = express.Router();

const controller = require("../controllers/api.controller");

//Employees
router.post("/api/employees", controller.createEmployee);
router.get("/api/employees", controller.findAllEmployees);
router.get("/api/employees/:id", controller.findOneEmployee);
router.put("/api/employees/:id", controller.updateEmployee);
router.delete("/api/employees/:id", controller.deleteEmployee);

//Departments
router.post("/api/departments", controller.createDepartment);
router.get("/api/departments", controller.findAllDepartments);
router.get("/api/departments/:id", controller.findOneDepartment);
router.put("/api/departments/:id", controller.updateDepartment);
router.delete("/api/departments/:id", controller.deleteDepartment);

module.exports = router;
