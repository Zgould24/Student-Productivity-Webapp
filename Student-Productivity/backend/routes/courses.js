const express = require('express');
const checkAuth = require('../security-middleware/check-Auth');
const router = express.Router();
const Course = require('../models/course');


router.post("",checkAuth,(req, res, next)=> {
  
  const course = new  Course({
    creatorId: req.userData.creatorId,
    title: req.body.title,
    instructorName: req.body.instructorName,
    classTime: req.body.classTime,
    officeHours: req.body.officeHours,
    CourseMemo: req.body.CourseMemo
  });
  course.save().then(createdCourse => {
    console.log("saved course");
    console.log(createdCourse);
    res.status(201).json({
    message: "added successfully."
  })
  });
  
});


// this middleware is used to get a course that matches with the id that is sent from front end.

router.get("/:id",checkAuth,(req, res, next) => {
  console.log("tes2");
  Course.findById(req.params.id).then(course=> {
    if (course){
      console.log("Course Found");
      console.log(course);
      res.status(200).json(course);
    } else {
      res.status(404).json({message: "Course not found"});
    }
  })
});

router.put("/:id", checkAuth,(req, res, next) => {
  console.log("Updating course");
  const course = {
    title: req.body.title,
    instructorName: req.body.instructorName,
    classTime: req.body.classTime,
    officeHours: req.body.officeHours,
    CourseMemo: req.body.CourseMemo
  }
  Course.findOneAndUpdate({_id: req.params.id, creatorId: req.userData.creatorId}, course, {returnOriginal: true, upsert: true}).then(result => {
    res.status(200).json({message: "Update was successful."});
  })
});

router.delete("/:id",checkAuth,(req, res, next) => {
    console.log(req.params.id);
    Course.deleteOne({ _id: req.params.id }).then(result => {
      console.log("Delete operation in process");
      res.status(200).json({ message: "update successful." });
    });
  });

router.get("",checkAuth ,(req,res, next) => {
    console.log("test");
    // console.log(req.userData.creatorId);
     const createdBy=req.userData.creatorId
     console.log("creatorId is" + createdBy);
    Course.find({creatorId: createdBy}).then(document => {
      console.log(document);
      res.status(200).json({
        message: "Courses Fetched successfully.",
        courses: document
      });
    });
});

module.exports = router; 