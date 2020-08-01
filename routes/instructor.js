const express = require ('express');
const router  = express.Router();
const Instructor = require ('../models/instructorModel');


//to register an instructor
router.post('/registerInstructor', (req,res) => {
    // console.log(req.body);
    const instructor = new Instructor({
        instructorID : req.body.instructorID,
        instructorName : req.body.instructorName,
        
    })
    instructor.save()
    .then(data => {
        res.json(data);
    })
    .catch (err => {
        res.json({message:err})
    });

    // ?How to use async await for the above procedure with a try catch
});


//to get all instructors
router.get('/', async(req,res) => {

    try{

        const instructors = await Instructor.find();
        res.json(instructors);

    }catch(err){
        res.json({message:err});
    }
});

//to get a specific instructor
router.get('/:instructorID', async(req,res) => {
    try{
        const instructorDetails = await Instructor.find({instructorID:req.params.instructorID});
        res.json(instructorDetails);
    }catch(err){
        res.json({message:err});
    }
    // console.log(req.params.instructorID)
    
});

// to delete an instructor
router.delete('/:instructorID', async(req,res) => {
    try{
        const deletedInstructor = await Instructor.deleteMany({instructorID: req.params.instructorID});
        res.json({deletedInstructor});
    }catch(err){
        res.json({message:err});
    }
});

//to update instructor name
router.patch('/:instructorID', async(req,res) => {
    try{
        const updatedInstructor = await Instructor.update({ instructorID: req.params.instructorID},{$set: {instructorName: req.body.instructorName}});
        res.json(updatedInstructor);
    }catch(err){
        res.json({message:err});
    }
})




module.exports = router;