const mongoose = require('mongoose');

const InstructorSchema = mongoose.Schema({
    instructorID : {
        type:String,
        required: true
    },
    instructorName:{
        type:String,
        required: true,
    }
});

module.exports = mongoose.model('Instructor',InstructorSchema);