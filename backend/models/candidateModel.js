const mongoose = require('mongoose');

// Candidate Schema
const candidateSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: String, required: true },
  currentRole: { type: String, required: true },
  skills: { type: [String], required: true },
  expectedSalary: { type: Number },
  resumeUrl: { type: String },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employer",  // Assuming "Employer" is your model name
  }
}, { timestamps: true });

// Export Model
module.exports= mongoose.model('Candidate', candidateSchema);


// C:\Users\reall\OneDrive\Desktop\WingConsultants\wings fr\backend\models\candidate.model.js