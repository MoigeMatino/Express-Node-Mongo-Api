const express = require ('express');
const router = express.Router();
const Course = require ('../models/coursesModel');
const { response } = require('express');

//to register a course
router.post('/registerCourse', (req, res) => {
    // console.log(req.body);
    const course = new Course ({
        courseCode : req.body.courseCode,
        courseName : req.body.courseName,
        courseInstructor : req.body.courseInstructor,
        courseYear : req.body.courseYear
    });

    // to save to db
    course.save()
        .then(data => {
            res.json(data);
        })
        .catch (err => {
            res.json({message:err})
        });

});


//getting all courses
router.get('/', async(req,res) => {
    try{
        const courses = await Course.find();
        res.json(courses);
    }catch(err){
        res.json({message:err})
    }
});

//getting a specific course
router.get('/:courseCode', async(req,res) => {
    try{
       const courseDetails = await Course.find( { courseCode : req.params.courseCode} ) ;
       res.json(courseDetails);
    }catch(err){
        res.json({message:err})
    }
    
});

//deleting a course
router.delete('/:courseCode', async(req,res) => {
    try{
        const deletedCourse = await Course.deleteMany({courseCode:req.params.courseCode});
        res.json(deletedCourse);
    }catch (err){
        res.json({message:err})
    }
});

//to update course name
router.patch('/:courseCode', async(req,res) => {
    try{
        const updatedCourse = await Course.update({ courseCode: req.params.courseCode},{$set: {courseName: req.body.courseName}});
        res.json(updatedCourse);
    }catch(err){
        res.json({message:err});
    }
})



module.exports = router;