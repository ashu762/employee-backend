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
