const express = require("express");
const {
  addEmployerRequirement,
  getAllEmployerRequirements,
  getEmployerById 
} = require("../controllers/employerController");

const router = express.Router();

// Add a requirement
router.post("/", addEmployerRequirement);

// Get all requirements
router.get("/", getAllEmployerRequirements);
router.get("/:id", getEmployerById);

module.exports = router;
