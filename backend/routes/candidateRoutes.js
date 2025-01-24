// const express = require('express');
// const router = express.Router();
// const { submitCandidateForm } = require('../controllers/candidateController');

// // POST route for submitting candidate form
// router.post('/', submitCandidateForm);

// module.exports = router;


const express = require('express');
const { submitCandidateForm, getCandidateById , getCandidatesByJobId  , getAllCandidates } = require('../controllers/candidateController');

const router = express.Router();
router.get('/candidates', getAllCandidates); // Add this route

// POST request for submitting a candidate form
router.post('/apply', submitCandidateForm);

// GET request for retrieving a candidate by ID
router.get('/:id', getCandidateById);

router.get('/job/:jobId', getCandidatesByJobId);


module.exports = router;
// C:\Users\reall\OneDrive\Desktop\WingConsultants\wings fr\backend\routes\candidateRoutes.js