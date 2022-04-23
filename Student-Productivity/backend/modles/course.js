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
