import Employee from "../models/employeeModel.js";
import asyncHandler from "express-async-handler";

// @desc Post the details of the employee
// @route POST /api/employee
// @access public
export const postEmployee = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    spouse,
    martial_status,
    comments,
    gender,
  } = req.body;

  const employee = await Employee.create({
    firstName,
    lastName,
    spouse,
    martial_status,
    comments,
    gender,
  });
  if (employee) {
    res.status(200).json({
      firstName: firstName,
      lastName: lastName,
      spouse: spouse,
      martial_status: martial_status,
      comments: comments,
      gender: gender,
    });
  } else {
    res.status(400);
    throw new Error("Employee Registration Unsuccessful");
  }
});

// @desc Get all employees
// @route GET /api/employee
// @access public

export const getAllEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find();
  if (employees) res.status(200).json(employees);
  else {
    res.status(400);
    throw new Error("Employees not found");
  }
});


// @desc Delete employee
// @route DELETE /api/employees/:id
// @access public

export const deleteEmployee =asyncHandler(async (req,res)=>{
  
    // console.log(req.params.id);
    const employee = await Employee.findById(req.params.id)
    // console.log(employee);
    if (employee) {
      await employee.remove()
      res.json({ message: 'Employee removed' })
    } else {
      res.status(404)
      throw new Error('Employee not found')
    }
})



// @desc Update employee
// @route Update /api/employees/:id
// @access public
export const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id)
  const {
    firstName,
    lastName,
    spouse,
    martial_status,
    comments,
    gender,
  } = req.body;
  employee.firstName=firstName;
  employee.lastName=lastName;
  employee.martial_status=martial_status;
  employee.comments=comments;
  employee.gender=gender;
  employee.spouse=spouse;

  if (employee) {
    const updatedEmployee = await employee.save()
    res.json({
      employee
    })
  } else {
    res.status(404)
    throw new Error('Employee not found')
  }
})