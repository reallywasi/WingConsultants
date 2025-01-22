const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  businessEmail: { type: String, required: true },
  position: { type: String, required: true },
  requiredSkills: { type: String, required: true },
  jobDescription: { type: String, required: true },
  budgetRange: { type: String, required: true },
  jobType: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Employer", employerSchema);



//C:\Users\reall\OneDrive\Desktop\WingConsultants\wings fr\backend\models\employerModel.js