const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
 
  
  name: {
    type: String,
  },
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "department",
  },
dob: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    
  },

  gender: {
    type: String,
  },
  
  
});

module.exports = mongoose.model("Employee", EmployeeSchema);