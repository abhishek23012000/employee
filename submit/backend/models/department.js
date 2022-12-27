const mongoose = require("mongoose");
const { Schema } = mongoose;

const DepartmentSchema = new Schema({
 
  departmentId: {
    type: mongoose.Types.ObjectId,
  },

  departmentName: {
    type: String,
  },
  
});

module.exports = mongoose.model("Department", DepartmentSchema);