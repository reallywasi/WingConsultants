// const express = require('express');
// const router = express.Router();
// const { submitCandidateForm } = require('../controllers/candidateController');

// // POST route for submitting candidate form
// router.post('/', submitCandidateForm);

// module.exports = router;


const express = require('express');
const { submitCandidateForm, getCandidateById } = require('../controllers/candidateController');

const router = express.Router();

// POST request for submitting a candidate form
router.post('/apply', submitCandidateForm);

// GET request for retrieving a candidate by ID
router.get('/:id', getCandidateById);

module.exports = router;
