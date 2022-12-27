
const express = require("express");

const router = express.Router();


const employee = require("../controller/employeeController");


router.post("/create", employee.createEmployee);


module.exports = router;