import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
  martial_status: {
    type: String,
    required: true,
  },
  spouse: {
    type: String,

    required: false,
  },
  comments: {
    type: String,
    required: false,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
