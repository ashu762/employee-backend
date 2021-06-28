import express from "express";
const router = express.Router();

import {
  postEmployee,
  getAllEmployees,
  deleteEmployee,
  updateEmployee
} from "../controllers/emloyeeController.js";

router.route("/").post(postEmployee).get(getAllEmployees);
router.route("/:id").delete(deleteEmployee).put(updateEmployee);
export default router;
