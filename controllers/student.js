const User = require('../models/student');

// Create a new student
const createStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.json(newStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get list of all students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createStudent,
    getStudents
};