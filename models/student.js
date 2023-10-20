const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email_address: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
