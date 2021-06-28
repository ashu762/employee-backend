import express from "express";
const router = express.Router();

import {
  postEmployee,
  getAllEmployees,
  deleteEmployee,
  updateEmployee,getEmployeeById
} from "../controllers/emloyeeController.js";

router.route("/").post(postEmployee).get(getAllEmployees);
router.route("/:id").delete(deleteEmployee).put(updateEmployee).get(getEmployeeById);
export default router;
