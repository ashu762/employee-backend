import express from "express";
const router = express.Router();

import {
  postEmployee,
  getAllEmployees,
} from "../controllers/emloyeeController.js";

router.route("/").post(postEmployee).get(getAllEmployees);
export default router;
