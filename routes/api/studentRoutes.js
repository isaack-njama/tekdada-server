const express = require('express');
const router = express.Router();
const studentController = require('../../controllers/student');

// Create a new student
router.post('/createStudent', studentController.createStudent);

// Fetch all students
router.get('/getStudents', studentController.getStudents);

module.exports = router;