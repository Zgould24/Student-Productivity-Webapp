const express = require('express');
const checkAuth = require('../security-middleware/check-Auth');
const router = express.Router();
const Assignment = require('../models/assignment');


router.post("",checkAuth,(req, res, next)=> {
  const assignment = new  Assignment({
    creatorId: req.userData.creatorId,
    course: req.body.course,
    assignment: req.body.assignment,
    dueDate: req.body.dueDate,
    completed: req.body.completed
  });
  assignment.save().then(createdAssignment => {
    console.log("saved course");
    console.log(createdAssignment);
    res.status(201).json({
    message: "added successfully."
  })
  });
  
});


router.put("/:id", checkAuth,(req, res, next) => {
  console.log("Updating course");
  console.log(req.body.course);
  const updatedAssignment = {
    course: req.body.course,
    assignment: req.body.assignment,
    dueDate: req.body.dueDate,
    completed: req.body.completed
  }
  console.log(updatedAssignment);
  Assignment.findOneAndUpdate({_id: req.params.id, creatorId: req.userData.creatorId}, updatedAssignment, {returnOriginal: true, upsert: true}).then(result => {
    res.status(200).json({message: "Update was successful."});
  });
});




router.get("", checkAuth, (req, res, next)=> {
  console.log("Getting all of the assignments");
  const createdBy=req.userData.creatorId;
  Assignment.find({creatorId: createdBy}).then(document => {
    console.log("Document returning")
    console.log(document);
    // console.log(document);
    res.status(200).json({
        message: "Assignments Fetched successfully.",
        assignments: document
      });
  });

});




module.exports = router;