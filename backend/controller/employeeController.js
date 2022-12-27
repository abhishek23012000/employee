
const Employee = require("../models/employee");
const Department = require("../models/department");
module.exports = {
 createEmployee: async (req, res, next) => {
    try {
      const { name, dob, gender, salary,department } = req.body;
     
      // VALIDATE REQUEST BODY
      if (!name || !dob || !gender || !salary) {
        return res.status(400).json({
          success: false,
          message: "Probably you have missed certain fields",
        });
      }
      const depart=await Department.create({
        departmentName:department
      })

      const newUser = await new Employee({
        name,
        dob,
        departmentId: depart._id,
        gender,
        salary,
        department
      });
      await newUser.save();
      return res.status(200).json({
        success: true,
        message: "Employee registerd successfully",
        response: newUser,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  
};