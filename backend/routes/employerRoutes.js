const express = require("express");
const {
  addEmployerRequirement,
  getAllEmployerRequirements,
  getEmployerById ,
  deleteEmployerById,
} = require("../controllers/employerController");

const router = express.Router();

// Add a requirement
router.post("/", addEmployerRequirement);

// Get all requirements
router.get("/", getAllEmployerRequirements);
router.get("/:id", getEmployerById);
router.delete("/:id", deleteEmployerById);

module.exports = router;


//C:\Users\reall\OneDrive\Desktop\WingConsultants\wings fr\backend\routes\employerRoutes.js