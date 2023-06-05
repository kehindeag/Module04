import express from "express";
import {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  createEmployeeView,
  updateEmployeeView,
} from "../controllers/employees.js";

const router = express.Router();

router.route("/api/employees").get(getAllEmployees).post(createEmployee);

// router.route("/add").get(createEmployeeView).post(createEmployee);

// router.route("/update/:id").get(updateEmployeeView).patch(updateEmployee);
router
  .route("/api/employees/:id")
  // .get(getEmployee)
  // .patch(updateEmployee)
  .delete(deleteEmployee);

export default router;
