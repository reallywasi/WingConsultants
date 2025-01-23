const Candidate = require('../models/candidateModel');

// Handle candidate form submission
const submitCandidateForm = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      location,
      experience,
      currentRole,
      skills,
      expectedSalary,
      resumeUrl,
      jobId
    } = req.body;

    // Create a new candidate instance
    const newCandidate = new Candidate({
      firstName,
      lastName,
      email,
      phoneNumber,
      location,
      experience,
      currentRole,
      skills,
      expectedSalary,
      resumeUrl,
      jobId
    });

    // Save candidate data to the database
    await newCandidate.save();

    res.status(200).json({ message: 'Application submitted successfully', candidate: newCandidate });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


// Handle getting a candidate by ID
const getCandidateById = async (req, res) => {
  try {
    const candidateId = req.params.id; // Get the candidate ID from the request parameters

    // Find the candidate by ID in the database
    const candidate = await Candidate.findById(candidateId);

    // If candidate not found
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    // Return the candidate data
    res.status(200).json({ candidate });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};



// Handle getting all candidates by jobId
const getCandidatesByJobId = async (req, res) => {
  try {
    const jobId = req.params.jobId; // Get the jobId from the request parameters

    // Find candidates with the specified jobId
    const candidates = await Candidate.find({ jobId }).populate('jobId');

    // If no candidates found
    if (!candidates || candidates.length === 0) {
      return res.status(404).json({ message: 'No candidates found for the specified jobId' });
    }

    // Return the list of candidates
    res.status(200).json({ candidates });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};





module.exports = { submitCandidateForm , getCandidateById ,   getCandidatesByJobId 
};


// C:\Users\reall\OneDrive\Desktop\WingConsultants\wings fr\backend\controllers\candidateController.js