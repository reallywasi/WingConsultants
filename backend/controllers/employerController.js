const Employer = require("../models/employerModel");

// Add Employer Requirement
const addEmployerRequirement = async (req, res) => {
  try {
    const {
      companyName,
      contactPerson,
      businessEmail,
      position,
      requiredSkills,
      jobDescription,
      budgetRange,
      jobType,
    } = req.body;

    // Create new employer requirement
    const newRequirement = await Employer.create({
      companyName,
      contactPerson,
      businessEmail,
      position,
      requiredSkills,
      jobDescription,
      budgetRange,
      jobType,
    });

    res.status(201).json(newRequirement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Employer Requirements
const getAllEmployerRequirements = async (req, res) => {
  try {
    const requirements = await Employer.find();
    res.status(200).json(requirements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployerById = async (req, res) => {
  try {
    const { id } = req.params;
    const employer = await Employer.findById(id);

    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    res.status(200).json(employer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employer", error: error.message });
  }
};


module.exports = { addEmployerRequirement, getAllEmployerRequirements , getEmployerById};
