// Course database schema for the MongoDB database.
// creatorID is used to identified the user who created the data so that data can be loaded to front-end correctly.


const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    creatorId: {type: String, required: true},
    title: {type: String, required: true},
    instructorName: {type: String, required: true},
    classTime: {type: [String], required: true},
    officeHours: {type: [String], required: true},
    CourseMemo: {type: String, required: true}
});

module.exports = mongoose.model('Course', courseSchema);
