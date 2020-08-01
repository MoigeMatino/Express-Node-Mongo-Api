const mongoose = require ('mongoose');

const CourseSchema = mongoose.Schema({
    courseCode: {
        type:String,
        required:true
    },
    courseName: {
        type:String,
        required:true
    },
    courseInstructor: String,
    courseYear: String
})

module.exports = mongoose.model('Course',CourseSchema);